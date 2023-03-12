const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const pdfRoute = require('./routes/pdfRoute')
const path = require('path')
mongoose.connect('mongodb+srv://root:shirina1708@cluster0.ufftb.mongodb.net/deltaTour?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log('Database connect')
  }).catch(e=>{
    console.log(e)
  });
app.use(express.json())
app.use(cors({
  exposedHeaders: ['_id ']
}))
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'pdfCreator','images', 'podpis.png'))
})
app.post('/post',(req,res)=>{
    console.log(req.body)
    res.send({msg: req.body})
})
app.use('/api',pdfRoute)
app.listen(5000, ()=>{
    console.log('Server is running')
})