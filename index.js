const { application } = require('express');
const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('this runs everytime!');
    next()
})

app.use('/hello', (req, res) => {
    res.send('<h1>Hello Mobin!</h1>')
})

app.use('/message', (req, res) => {
    console.log(req.body); 
    res.redirect('/')
})

app.use('/', (req, res) => {
    res.send('<center><form action="/message" method="POST"><input type="text" name="message"></form></center>');
})

app.listen(3000)