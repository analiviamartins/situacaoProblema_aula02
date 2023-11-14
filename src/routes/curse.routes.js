import { Router } from "express";
import { 
    buscarTodosCursos,
    buscarCurso, 
    mostrarCurso,
    editarCurso,
    deletarCurso
 } from "./controllers/curse.controller.js";

const rotasCursos = Router();

rotasCursos.get("/", buscarTodosCursos)

rotasCursos.get("/:id", buscarCurso)

rotasCursos.post("/", mostrarCurso)

rotasCursos.put("/:id", editarCurso)

rotasCursos.delete("/:id", deletarCurso)
export default rotasCursos