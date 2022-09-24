const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const { setStatics } = require('./utils/statics');
const rootDir = require('./utils/path');
const adminRoutes = require('./routes/admin');
const indexRoutes = require('./routes/index');
const errController = require('./controllers/error');

const app = express()

//? Middlewares
app.use(bodyParser.urlencoded({ extended:false }))
//!

//? EJS
app.set('view engine', 'EJS')
app.set('views', 'views')
//!

//? static
setStatics(app)
//!

//? Routes
app.use('/admin', adminRoutes)
app.use(indexRoutes)
//!


app.use(errController.get404)



app.listen(3000, () => console.log('http://localhost:3000'))