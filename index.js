const port = 3000
const express = require('express')
const app = express()
const path = require('path')
const router = require('./routes/api')
//const bodyParser = require('body-parser')



app.use("/api",router)
app.use(express.json())
app.use(express.static(path.join(__dirname,"public")))
app.get('/favicon.ico', (req, res) => res.status(204).end());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permitir qualquer origem
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.listen(port, (erro)=>{
    if(erro){
        console.log(erro)
    }else{
        console.log(`Server run in port ${port}`)
    }
})