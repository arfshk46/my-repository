const express= require('express')
const bodyParser = require('body-parser');
const app=express()
app.use(bodyParser.json());
app.get('/bhfl',(req,res)=>{
    const mess={"operation_code":1}
    res.json(mess)
})
function isAlphabet(character) {
    return /^[A-Za-z]$/.test(character);
  }
  
  
app.post('/bhfl',(req,res)=>{
    const requestdata=req.body
//format "data": [“M”,”1”,”334”,”4”,”B”]
    const data=requestdata.data
    let numbers=[]
    let alphabets=[]

    for(var i=0;i<data.length;i++){
        if(isAlphabet(data[i])){
            alphabets.push(data[i])
        }

    }

    for(var i=0;i<data.length;i++){
        if(!isNaN(data[i])){
            numbers.push(data[i])
        }
    }
    alphabets.sort()
    alphabets.reverse()
    const high=alphabets[0]
    
    const info ={"is_success": true,
    "user_id": "shaik_arief_ahamad_sharief_04072002", "email" : "ahamadsharief_shaik@srmap.edu.in",
    "roll_number":"AP20110010524",
    "numbers":Array(numbers),
    "alphabets":Array(alphabets),
    "highest_alphabet":high}
    res.send(info)
    
    
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});