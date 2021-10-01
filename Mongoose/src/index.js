const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const port = 8000
const mongoose = require('mongoose')
//Database
mongoose.connect('mongodb://localhost:27017/testDB')
// Schema -- Structure of Document
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now()
    }
})
//Model -- For Creating Collection
const Playlist = new mongoose.model("Playlist", playlistSchema)
//Creating a document 
const createDocument = async () => {
    try {
        const playlist = new Playlist({
            name: "Node JS",
            ctype: "Back-End",
            videos: 2,
            author: "Windows 11",
            active: true,
        })
        const playlist1 = new Playlist({
            name: "Vue JS",
            ctype: "Front-End",
            videos: 3,
            author: "Windows 11",
            active: true,
        })
        const playlist2 = new Playlist({
            name: "Angular JS",
            ctype: "Front-End",
            videos: 4,
            author: "Windows 11",
            active: true,
        })
        const playlist3 = new Playlist({
            name: "Mongo DB",
            ctype: "Database",
            videos: 5,
            author: "Windows 11",
            active: true,
        })
        const playlist4 = new Playlist({
            name: "Mongoose",
            ctype: "Database",
            videos: 6,
            author: "Windows 11",
            active: true,
        })
        const result = await Playlist.insertMany([playlist1, playlist2, playlist3, playlist4])
        console.log(result);

    } catch (error) {
        console.log(error);
    }
}
createDocument()
//Server
const template = path.join(__dirname, '../template/views')
app.use(express.static(path.join(__dirname, '../public')))
hbs.registerPartials(path.join(__dirname, '../template/partials'))
app.set('view engine', 'hbs')
app.set('views', template)
app.get('/', (req, res) => {
    res.render('index', {
        name: "Aneeq Khurram"
    })
})

app.listen(port)