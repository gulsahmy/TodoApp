"use strict"

const express = require('express')
const app = express()

//* Required modules
require('dotenv').config()
const PORT = process.env.PORT || 8000

require('express-async-errors')

//* Configurations
require('../backend/src/configs/dbConnection')()

//* Middleware
app.use(express.json())

const cors = require('cors')
app.use(cors({origin:'http://localhost:3000'}))


app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to TODO API'
    })
})

app.use('/todo', require('./src/router/todo'))

app.use(require('./src/middlewares/errorHandler'))

app.listen(PORT, () => console.log('Listening at http://127.0.0.1:' + PORT))

