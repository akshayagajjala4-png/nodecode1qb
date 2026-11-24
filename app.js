const express=require('express');
const app=express();
app.get('/',(req,res)=>
{
    res.send("WElcome to the college portal");
});
app.listen(3002,()=>
{
    console.log("Server is running");
});