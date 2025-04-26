const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()
app.use(express.json())


/*
{
    1:[
        {
            id: 1001,
            idLembrete: 1,
            texto: Sem açúcar
        },
        {
            id: 1002,
            idLembrete: 1,
            texto: Comprar o pó
        }
    ],
    2:[]
}
*/

const baseObservacoes = {

}

//GET /lembretes/1/obervacoes

app.get('/lembretes/:idLembrete/observacoes', (req, res) => {
    const idLembrete = req.params.idLembrete

    if (idLembrete === 'all') res.json(baseObservacoes)
    else{
        res.json(baseObservacoes[idLembrete] || [])
        }   
})

//POST /lembretes/1/obervacoes

app.post('/lembretes/:idLembrete/observacoes', (req, res) => {
    const idObservacao = uuidv4()
    const texto = req.body.texto
    const{idLembrete} = req.params

    const obervacao = {
        id: idObservacao,
        idLembrete,
        texto
    }
    const observacoes = baseObservacoes[idLembrete] || []

    observacoes.push(obervacao)

    baseObservacoes[idLembrete] = observacoes

    res.status(201).json(observacoes)

})

const port = 5000
app.listen(port, () => {
    console.log(`Observações. Porta:${port}`)
})