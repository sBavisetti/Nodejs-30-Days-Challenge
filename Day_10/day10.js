const express = require('express')


function staticFileServer(req, res){
    const app = express();
    app.use(express.static('public'));

    app.get('/', (req, res)=>{
        res.send('index.html',{ root:'public'});
    })

    app.listen(3000, ()=>{
        console.log('Server is up and running on port : 3000')
    })
}

staticFileServer();

