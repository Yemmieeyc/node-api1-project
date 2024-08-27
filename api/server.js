
const express = require('express')

const User = require('./users/model')

const server = express()

server.get('/api/users', (req, res) =>{
    User.find()
    .then(users =>{
        throw new Error('arghhh')
    })
    .catch(err => {
        res.json(500).json({ 
            message: "There was an error while saving the user to the ",
        err: err.message })
    })
})

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found'
    })
})

module.exports = server; 
