const express = require("express")
const app = express();
const PORT = 9000
const router = require('./Router/router')

app.use(express.json())
require('dotenv').config()

app.use('/', router)
app.listen(PORT, () => {
    console.log(`Server Running on port:http://localhost:${PORT}`)
})