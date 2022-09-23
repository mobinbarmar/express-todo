const path = require('path');

const express = require('express');
const rootDir = require('../utils/path');

const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir ,'views', 'index.html') )
})

router.get('/hello', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'hello.html'))
})

module.exports = router