const express = require('express');
require('dotenv').config()
const server = express();
const db = require('./data/dbConfig.js')
const users = require('./users/users')

server.post('/api/users',(req,res)=>{
    const body = req.body;
    users.insert(body).then(user=>{
        res.status(201).json([user.id])
    })
    .catch(err=> res.status(500).json(err))
    

})
server.delete('/api/users/:id', (req, res) => {
    const id = req.params.id
    users.remove(id).then(user => {
        res.status(200).json({id})
    })
        .catch(err => res.status(500).json(err))

})
module.exports = server;
server.use(express.json())


