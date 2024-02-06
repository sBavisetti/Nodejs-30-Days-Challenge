// import express library
const express = require('express')

// variable to use express functions such as 
// get, listen, put, post etc
const app = express()

// method to handle request and response
function greetHandler(req, res){
    const name = req.query.name
    const greetings = name ? `Hello , ${name}!` : 'Hello, Guest!';
    res.send(greetings);
}

// get command
app.get('/greet', greetHandler)

// listening to post
app.listen(3000 , ()=> console.log("port is running on 3000"))