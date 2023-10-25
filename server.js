const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db.js')

//conexion a bases de datos Mongo
dotenv.config({
    path: './config/.env'
})

connectDB()

//crear el servidor express de aplicaciones

const app = express()

app.listen( process.env.PORT, () => {
    console.log(`Servidor ejecutando en puerto:${process.env.PORT}`.bgCyan.red.underline)
})