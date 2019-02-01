const express = require('express');
require('dotenv').config()
const server = express();
const db = require('./data/dbConfig.js')

module.exports = server;
server.use(express.json())

server.get('/api/',(req,res)=>{
    db('users')
    .then(users =>{
        res.status(200).json({message: 'get requestt working'})
    })
    .catch(err=>{
        res.status(500).json({error: 'cannot retrieve post information'})
    })
})

