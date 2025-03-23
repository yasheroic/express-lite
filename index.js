const createServer = require('./cohort')

const app = createServer()
const port = 8000

app.get('/',(req,res)=>{
    console.log('Handling get request');
    res.send('You are in root directory')
    
})

app.get('/home',(req,res)=>{
    console.log('Handling get request');
    res.end('You are in homepage')
    
})

app.listen(port,function(){
    console.log(`listening to port: ${port}`);
    
})

