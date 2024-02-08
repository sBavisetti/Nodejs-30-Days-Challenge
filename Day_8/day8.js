// import express module
const express = require('express');
const app = express();

// middleware to parse json
app.use(express.json());


// Express route to handle 
// requests with a positive integer parameter
function positiveIntegerHandler(req, res, next){
    const number = parseInt(req.query.number);
    
    // check if input is > 0 
    if (!Number.isInteger(number) || number <=0 ){
        const error = new Error('"number" should be a positive integer');
        error.status = 400;
        return next(error);
    }


    res.status(200).json({message:'Success', number});
}

// error handling middleware function
function errorHandler(err, req, res, next){
    if (err.status === 400){
        res.status(400).json({error:err.message});
    }else{
        next(err);
    }
}

app.use(errorHandler);

app.get('/positive', positiveIntegerHandler);

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});