import {Router} from 'express';
import moviesController from '../controllers/moviesController';

class MoviesRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.get("/",moviesController.list);
        this.router.get("/:id",moviesController.getSingle);
        this.router.post("/",moviesController.create);
        this.router.delete("/:id",moviesController.delete)
        this.router.put("/:id",moviesController.update)
    }
}

const moviesRoutes = new MoviesRoutes();
export default moviesRoutes.router;