const express = require('express')
const app = express()
const port = 65000

// routes
app.listen(port, (req, res) => {
    console.log(`Example app listening on port ${port} ...`)
})

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/twitter', (req, res) => {
    res.send(`UserName: @minsuagrahari`)
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/minsu', (req, res) => {
    res.send("<h2>I am Full stack Developer</h2>")
})