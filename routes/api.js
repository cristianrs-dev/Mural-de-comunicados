const express = require("express")
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const posts = require('../model/post')


//rota para retornar todos os posts
router.get("/all",(req,res)=>{
   
    res.json(JSON.stringify(posts.getAll()))

})

//rota para criar um post
router.post("/new",bodyParser.json(), (req,res)=>{

let titulo = req.body.titulo
let descricao = req.body.descricao


posts.newPost(titulo,descricao)
res.send({mensagem:"post adicinoado"})
})

router.delete("/delete/:id",bodyParser.json(),(req,res)=>{

        let indice = req.params.id
        posts.deletePost(indice)
        res.send({mensagem:"post deletado"})
})
router.put("/atualizar/:id",bodyParser.json(),(req,res)=>{
    let indice = req.params.id
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    posts.putPost(indice,titulo,descricao)
    res.send({mensagem:"post atualizado"})
})

module.exports = router