const fs = require('fs');

const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('<center><form action="/message" method="POST"><input type="text" name="message"></form></center>');
})

app.get('/hello', (req, res) => {
    res.send('<h1>Hello Mobin!</h1>')
})

app.post('/message', (req, res) => {
    const message = req.body.message
    fs.writeFile('./data/message.txt', req.body.message, (err) => {
        if(err) throw err
        res.redirect('/')
    })
})


app.listen(3000)