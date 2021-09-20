const express = require('express')
const path = require('path')
const app = express()
const port = 8000
//built in middleware

app.use(express.static(path.join(__dirname, '../public')))

app.get("/", (req, res) => {
    res.send("Hello from the server")
})
app.listen(port, () => {
    console.log(`Listening to the ${port}`);
})