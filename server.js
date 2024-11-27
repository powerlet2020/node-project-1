const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public')) ;

app.use(express.urlencoded({extended:true}))

const PORT = 8800

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})


app.post('/',(req, res) => {
    const number1= parseFloat(req.body.number1)
    const  operation = req.body.Operation
    const number2= parseFloat(req.body.number2)

    let result;

    switch(operation){
        case'add':
        result = parseFloat(number1 + number2)
        break
        
        case'subtract':
        result = parseInt(number1-number2)
        break

        case'divide':
        result = parseFloat(number1/number2)
        break

        case'multiply':
        result = parseFloat(number1*number2)
        break
        
        default:
        result = 'invalid'
        break
    }
   
    res.send("<h1 style ='color:blue;position:absolute; top:40%; left:40%;'>result:"+ result +" </h1>");
})

app.listen(PORT, ()=>{
    console.log(`server started on ${PORT}!`)
})