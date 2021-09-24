const express = require('express');
const app = express();
const path = require('path')
const hbs = require('hbs');
const port = process.env.PORT || 8000;
// Static Path initialization must for css and other files
const staticPath = path.join(__dirname, '../public')
app.use(express.static(staticPath))
//Engine Initialization
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../templates/views'))
// Partials Initialization
hbs.registerPartials(path.join(__dirname, '../templates/partials'))
//Routing
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/weather', (req, res) => {
    res.render('weather')
})
app.get('*', (req, res) => {
    res.render('404', {
        errorMsg: 'Are You Lost!'
    })
})
app.listen(port)