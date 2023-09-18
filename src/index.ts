import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())


app.use((request, response, next) => {
    //permissões de origem da requisição
    response.header('Access-Control-Allow-Origin','*')
    //permissões de metodos que serão utilizados na API
    response.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS')

    //define as permissões para o cors
    app.use(cors())

    //continua para a leitura dos EndPoints
    next();

})


app.post('/signup', async (req, res) => {
    if(req.headers['content-type'] == 'application/json'){
        res.send('Olá')
    }else{
        res.send('Olá')
    }
    
})

app.get('/login', async (req, res) => {
    res.send('Olá')
})


app.listen(8080, () => {
    console.log('escutando na porta 8080')
})