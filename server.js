//configurações do servidor 
const express = require ('express')
const app = express()
const port = process.env.PORT || 666

//exportar as configurações 
module.exports = {app,port}