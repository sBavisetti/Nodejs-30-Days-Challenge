const express = require('express')
const app = express();

const limit = 5
const windowMs = 60000

const reqcount = {}

function rateLimitMiddleware(req, res, next){
    const ip = req.ip 
    if (!reqcount[ip]){
        reqcount[ip] = {
            count : 0,
            lastRequestTime : Date.now()
        };
    }

    const cTime = Date.now();
    const eTime = cTime - reqcount[ip].lastRequestTime;

    if (eTime > windowMs){
        reqcount[ip].count = 0
        reqcount[ip].lastRequestTime = cTime;
    }

    if (reqcount[ip].count >= limit){
        return res.status(429).json({error:'Too many Requests'})
    }
    reqcount[ip].count+=1
    reqcount[ip].lastRequestTime = cTime

    next();

}

app.use(rateLimitMiddleware)

app.get('/', (req, res)=>{
    res.send("Hello World!")
})

app.listen(3000, ()=>{
    console.log('Server is up and running on port 3000')
})