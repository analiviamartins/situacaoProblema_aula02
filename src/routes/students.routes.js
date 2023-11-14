import { Router } from "express";
import { 
    buscarTodosAlunos,
    buscaraluno, 
    deletarAluno,
    editarAluno,
    mostrarAluno
 } from "./controllers/students.controller.js";

const rotasAlunos = Router();

rotasAlunos.get("/", buscarTodosAlunos)

rotasAlunos.get("/:id", buscaraluno)

rotasAlunos.post("/", mostrarAluno)

rotasAlunos.put("/:id", editarAluno)

rotasAlunos.delete("/:id", deletarAluno)
export default rotasAlunos
