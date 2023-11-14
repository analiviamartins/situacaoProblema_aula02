import { Student } from "../../models/students/Student.js"
import { studentsList } from "../../models/students/StudentsList.js"

const list = studentsList

export const buscarTodosAlunos= (req, res)=>{
    const students =list.getAllStudents();

    if(!students.lenght){
        return res.status(404).send({
             message:" Nenhum aluno cadastrado",
            status: "not found"
        })
    }
    return res.status(200).send({
        menssage: `todos alunos via controller`,
        status: "ok",
        data: students,
    })
}

export const buscaraluno= (req, res)=>{
    const {id}= req.params
     const students = list.getStudentsById(id)
if(!students){
    return res.status(404).send({message:`Aluno com id ${id} não encontrado`, status:"not found"})
}
    return res.status(200).send({message:`apenas um aluno com id ${id} via controller`, data:students})
}

export const mostrarAluno=(req, res)=>{
        const {nome,email,idade} = req.body;
    
        if(!nome || !email || !idade){
            return res.status(400).send({message: "Dados inválidos"});
        }
        return res.status(201).send({
             nome, email, idade,
            origem: "controller"
            });
}

export const editarAluno= (req, res)=>{
    const {id} = req.params;
    const {nome,email,idade} = req.body;

    if(!nome || !email || !idade){
        return res.status(400).send({message: "Dados inválidos"});
    }
    return res.status(200).send({ 
        message: `Rota PUT aluno `,
        origem: "controller"
    });
}

export const deletarAluno=(req,res)=>{
    const {id}= req.params
    return res.status(200).send({
        message: `usuário com o id: ${id} deletado`,
        origem: "controller"
    });
}