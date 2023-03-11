const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const pdfRoute = require('./routes/pdfRoute')
const process = require('process');
const path = require('path')
// const env = require('dotenv').config();
mongoose.connect('mongodb+srv://root:shirina1708@cluster0.ufftb.mongodb.net/deltaTour?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log('Database connect')
  }).catch(e=>{
    console.log(e)
  });
app.use(express.json())
app.use(express.static(path.resolve(process.cwd(), "/")));
app.use(cors({
  exposedHeaders: ['_id ']
}))

app.use('/api',pdfRoute)
app.get("/", (req, res) => {
  res.send("Cors, ExpressJson Mongoose Routes");
});
app.listen(5000, ()=>{
    console.log('Server is running')
})
module.exports = app;