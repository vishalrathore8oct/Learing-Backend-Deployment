require('dotenv').config()
const express = require('express')

const app = express()

// const port = 3000
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send("Hello Mr. Vishal Rathore")
})

app.get('/login', (req, res) => {
    res.send("<h1>You are logged In our Server</h1>")
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}/`);
})