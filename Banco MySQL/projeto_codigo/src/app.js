import express from 'express'
import conexao from '../infra/conexao.js'

const app = express()

app.use(express.json())

//criar rota
// Rota get 
app.get('/estudantes', (req, res) =>{
    const sql = 'SELECT * FROM dados_estudantes'
    conexao.query(sql,(erro, resultado) =>{
        if(erro){
            console.log(erro)
        } else {
            res.json(resultado)
        }
    })
})

//Rota get consulta por ID
app.get('/estudantes/:id' , (req,res) =>{
    const id = req.params.id
    const sql = "SELECT * FROM dados_estudantes WHERE id_estudante = ?"
    conexao.query(sql, id, (erro, resultado) =>{
        if(erro){
            console.log(erro)
        }else{
            res.status(200).json(resultado)
        }
    })
})

app.post('/estudantes', (req,res) =>{
    const estudante = req.body
    const sql = "INSERT INTO dados_estudantes SET ?"
    conexao.query(sql, estudante, (erro, resultado) =>{
        if(erro){
            console.log(erro)
        }else{
            res.json(resultado)
        }
    })
})





export default app