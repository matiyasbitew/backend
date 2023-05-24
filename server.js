const express =require('express')
const app =express()
var routes =require('./route/routes')
const mongoose=require("mongoose");
mongoose.set("strictQuery", false);
const cors=require("cors");
app.use(express.json());
app.use(express.json());
app.use(cors({
origin: 'http://localhost:8080'
}));

app.listen(9002,function check(err)
{
    if(err){
      console.log((err))
    }
    else{
        console.log("started");
    }
})
mongoose.connect("mongodb://127.0.0.1:27017/cu",{useNewUrlParser:true, useUnifiedTopology:true},
).then(()=>{
    console.log("connected");
}).catch("not connected");

app.use(routes);
