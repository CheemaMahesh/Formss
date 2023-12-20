const express=require('express');
const cors=require('cors');

const PORT=8000;
const app=express();

app.use(express.json({ limit:"30mb", extended:true }));
app.use(express.urlencoded({  limit:"30mb", extended:true }));
app.use(cors());


app.use('/',require('./routes'));


const CONNECT_URL='mongodb://127.0.0.1/Nehaform';
const mongoose=require('mongoose');

mongoose.set('strictQuery',false);


mongoose.connect(CONNECT_URL)
.then(()=>  app.listen(PORT,(err)=>{
    console.log('mongoose connected , Server is up and runnign on port:',PORT)
})

).catch((err)=>{
    console.log(err)
})