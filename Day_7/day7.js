// import express module
const express = require('express')
const app = express();

function requestLoggerMiddleware(req, res, next){
    const timeStamp = new Date().toISOString();
    const method = req.method

    console.log(`${timeStamp} - ${method} request received`);
    next();
}

app.use(requestLoggerMiddleware);


app.listen(3000, ()=>{
    console.log("Server is up and Running")
});