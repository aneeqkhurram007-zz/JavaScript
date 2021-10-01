const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const port = 8000

const template = path.join(__dirname, '../template/views')
app.use(express.static(path.join(__dirname, '../public')))
app.set('view engine', 'hbs')
app.set('views', template)
app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port)