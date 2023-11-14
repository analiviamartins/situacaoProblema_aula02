export const buscarTodosCursos= (req, res)=>{
    return res.status(200).send({
        menssage: `Todos os cursos`,
        origem: "controller"
    })
}

export const buscarCurso= (req, res)=>{
    const {id}= req.params
    return res.status(200).send({
        message:`apenas um curso com id ${id}`,
        origem:"controller"
    })
}

export const mostrarCurso=(req, res)=>{
        const {nomeCurso, descricao,vagas} = req.body;
    
        if(!nomeCurso || !descricao || !vagas){
            return res.status(400).send({message: "Dados inválidos"});
        }
        return res.status(201).send({
             nomeCurso, descricao, vagas,
            origem: "controller"
            });
}

export const editarCurso= (req, res)=>{
    const {id} = req.params;
    const {nomeCurso, descricao, vagas} = req.body;

    if(!nomeCurso || !descricao || !vagas){
        return res.status(400).send({message: "Dados inválidos"});
    }
    return res.status(200).send({ 
        message: `Rota PUT curso `,
        origem: "controller"
    });
}

export const deletarCurso=(req,res)=>{
    const {id}= req.params
    return res.status(200).send({
        message: `curso com o id: ${id} deletado`,
        origem: "controller"
    });
}