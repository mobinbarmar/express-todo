const fs = require('fs');

const express = require('express');

const router = express.Router()

router.post('/message', (req, res) => {
    const message = req.body.message
    fs.writeFile('./data/message.txt', req.body.message, (err) => {
        if(err) throw err
        res.redirect('/')
    })
})

module.exports = router