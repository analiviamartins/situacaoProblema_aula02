import {Router} from "express";
import rotasAlunos from "./students.routes.js";
import rotasCursos from "../routes/curse.routes.js";

const rotas = Router();

rotas.use("/alunos", rotasAlunos);
rotas.use("/curso", rotasCursos)

rotas.get("/", (req, res) => {
    return res.status(200).send({ message: "servidor ok!" });
  });



export default rotas;

