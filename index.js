const path = require('path');

const express = require('express')
const bodyParser = require('body-parser');
const rootDir = require('./utils/path');

const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');
const { dirname } = require('path');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(rootDir, 'public')))

//? Routes
app.use('/admin', adminRoutes)
app.use(homeRoutes)
//! End Routes

app.use('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'))
})



app.listen(3000)