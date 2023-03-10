const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const pdfRoute = require('./routes/pdfRoute')
const env = require('dotenv').config();
mongoose.connect('mongodb+srv://root:'+process.env.Mongo_Pass+'@cluster0.ufftb.mongodb.net/deltaTour?retryWrites=true&w=majority',{
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
app.post('/post',(req,res)=>{
    console.log(req.body)
    res.send({msg: req.body})
})
app.use('/api',pdfRoute)
app.listen(5000, ()=>{
    console.log('Server is running')
})