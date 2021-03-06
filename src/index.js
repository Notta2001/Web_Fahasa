const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 5921

const route = require("./routes/index.js")
const db = require('./config/db/index.js')

//Connect to DB
db.connect()

app.use(express.static(path.join(__dirname, './public')))
app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('hbs', handlebars({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// route init
route(app) 

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))