"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class MoviesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const movies = (yield database_1.default.query("select * from movies"))[0];
            res.json(movies);
        });
    }
    getSingle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const movie = (yield database_1.default.query("Select * From movies where id = ?", [id]));
            if (movie.length > 0) {
                return res.json(movie[0]);
            }
            res.status(404).json({ text: "La pelicula no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body["created_at"] = undefined;
            yield database_1.default.query("INSERT INTO movies set ?", [req.body]);
            res.json({ text: 'Created Movie' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const movie = yield database_1.default.query("delete from movies where id = ?", [id]);
            if (movie.length > 0) {
                return res.json({ text: "La pelicula fue eliminada" });
            }
            res.status(404).json({ text: "La pelicula no existe" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const movie = yield database_1.default.query("update movies set ? where id = ?", [req.body, id]);
            res.json({ text: 'Updated Movie ' });
        });
    }
}
const moviesController = new MoviesController();
exports.default = moviesController;
