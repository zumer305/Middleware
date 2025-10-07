const express=require("express");
const app=express();

// middleware 
app.use((req,res,next)=>{
    // let{query}=req.query;
    // console.log(query);
    console.log("Hi I am  first middleware");
    // res.send("midleware finished");
    next();

})
app.use((req,res,next)=>{
    console.log("Hi I am 2nd middleware");
    next();

})


app.get("/",(req,res)=>{
    res.send("Hi I am root");
})
app.get("/random",(req,res)=>{
    res.send("This is my random page");
})




// port 
app.listen(8080,()=>{
    console.log("app is listening to the port 8080");
})