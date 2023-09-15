import express from 'express'
import mysql from 'mysql'

const app = express()



app.get('/', (req, res) => {
    res.send('Olá')
})


app.listen(8000)