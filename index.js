import express from 'express'

const app = express();
app.get('/',(req,res)=>{
    res.send("Hello world")
});
app.get('/test',(req,res)=>{
    res.send("Hello world test")
});
app.get('/next', (req,res)=>{
    res.send("welcome to centennial")
})
const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})