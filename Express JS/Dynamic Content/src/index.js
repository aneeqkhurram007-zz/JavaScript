const express = require('express')
const app = express()
const path = require('path')
const port = 8000
//For Static Website Hosting
// const staticPath = path.join(__dirname, '../public')
// app.use(express.static(staticPath))

//First Come First Serve

//Another Static Routing within index.js
// app.get('/', (req, res) => { res.send("Hello Index.js") })

//To set the view wngine
app.set('view engine', 'hbs')
//Name cane be changed from views to any name
const templatePath = path.join(__dirname, '../template');
app.set('views', templatePath)
// template engine route

app.get("/", (req, res) => {
    res.render('index', {
        name: "Aneeq"
    })
})
app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port)