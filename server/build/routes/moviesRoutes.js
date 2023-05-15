"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moviesController_1 = __importDefault(require("../controllers/moviesController"));
class MoviesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", moviesController_1.default.list);
        this.router.get("/:id", moviesController_1.default.getSingle);
        this.router.post("/", moviesController_1.default.create);
        this.router.delete("/:id", moviesController_1.default.delete);
        this.router.put("/:id", moviesController_1.default.update);
    }
}
const moviesRoutes = new MoviesRoutes();
exports.default = moviesRoutes.router;
