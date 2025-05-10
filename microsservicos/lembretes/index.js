const express = require('express')
const axios = require("axios")
const app = express()
app.use(express.json())
//API: para essa aplicação, é uma coleção de endpoints
//DEFININDO ENDPOINTS
//um endpoint é caracterizado por:
//um método do protocolo http,
//um padrão de acesso,
//uma funcionalidade
/*

{
    1: {
        id: 1,
        texto: 'fazer café'    
    },
    2: {
        id: 2,
        texto: 'ir à festa'
    }
}

*/
const base_lembretes = {}
let id = 1
//GET /lembretes () => {}
//localhost:4000/lembretes
app.get('/lembretes', (req, res) => {

    res.json(base_lembretes)
})

//localhost:4000/lembretes
//POST /lembretes () => {}
app.post('/lembretes', (req,res) => {
    //1. pegar o texto que veio da requisicao
    const {texto} = req.body
    //2. construir o objeto com id e texto
    const lembrete = {
        id: id, // da na mesma que escrever só a chave id
        texto: texto
    }
    //3. cadastrar o objeto na base, no formato visto ali em cima
    base_lembretes[id] = lembrete
    //4. incrementar o id para a proxima vez
    id++

    axios.post('http://localhost:10000/eventos', {
        tipo: 'LembreteCriado',
        payload: lembrete
    })
    .then((resAxios =>{
        
    }))
    .catch((e) => {
        console.log(e)
    })
    .finally(() =>{
        //5. devolver o objeto recem-criado
        res.status(201).json(lembrete)
    })
})

//POST /eventos
app.post('/eventos', (req,res) => {
    console.log(req.body)
    res.end()
})

const port = 4000 //xumbando a porta do servidor (n é uma boa pratica)
app.listen(port, () => {
    console.log(`Lembretes. Porta ${port}`)
})