import { Request, Response } from "express";

import pool from "../database";

class MoviesController{

    
    public async list (req: Request, res: Response){
        
        const movies = (await pool.query("select * from movies"))[0];
        
        res.json(movies);
    }

    public async getSingle (req: Request, res: Response){
        const {id} = req.params;
        const movie = (await pool.query("Select * From movies where id = ?",[id]));
        if(movie.length > 0){
            return res.json(movie[0]);
        }
        res.status(404).json({text: "La pelicula no existe"});
    }

    public async create(req: Request, res: Response){
        req.body["created_at"] = undefined;
        await pool.query("INSERT INTO movies set ?", [req.body]);
        res.json({text: 'Created Movie'});
    }

    public async delete(req: Request, res: Response){
        const {id} = req.params;
        const movie = await pool.query("delete from movies where id = ?",[id])
        if(movie.length > 0){
            return res.json({text: "La pelicula fue eliminada"});
        }
        res.status(404).json({text: "La pelicula no existe"});
    }

    public async update(req: Request, res: Response){
        const {id} = req.params;
        const movie = await pool.query("update movies set ? where id = ?",[req.body, id]);
        res.json({text: 'Updated Movie '});
    }
}

const moviesController = new MoviesController();
export default moviesController;