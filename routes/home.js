const express = require('express');

const router = express.Router()

router.get('/', (req, res) => {
    res.send('<center><form action="/admin/message" method="POST"><input type="text" name="message"></form></center>');
})

router.get('/hello', (req, res) => {
    res.send('<h1>Hello Mobin!</h1>')
})

module.exports = router