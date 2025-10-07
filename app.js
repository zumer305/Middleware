const express=require("express");
const app=express();

// // middleware 
// app.use((req,res,next)=>{
//     // let{query}=req.query;
//     // console.log(query);
//     console.log("Hi I am  first middleware");
//     // res.send("midleware finished");
//     next();

// })
// app.use((req,res,next)=>{
//     console.log("Hi I am 2nd middleware");
//     next();

// })



//LOGGER MORGAN
// app.use((req,res,next)=>{
//     req.time=Date.now();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// })



// callbacks app.use 
// app.use("/random",(req,res,next)=>{
// console.log("I am only for random");
// next();
// })





//middleware (e.g google pass sa khulta to /api?token=give access)
app.use("/api",(req,res,next)=>{
    let{token}=req.query;
    if(token=="give access"){
        next();
    }
    throw new Error("access denied");
})
app.get("/api",(req,res)=>{
    res.send("data");
})

// same as above 
// const checkToken=(req,res,next)=>{
//     let{token}=req.query;
//     if(token=="give access"){
//         next();
//     }
//     res.send("access denied");
// });
// app.get("/api",checkToken(req,res)=>{
//     res.send("data");
// });






app.get("/",(req,res)=>{
    res.send("Hi I am root");
})
app.get("/random",(req,res)=>{
    res.send("This is my random page");
})


// 404 
// app.use((req,res)=>{
//     res.send("Page not found");
// })

// port 
app.listen(8080,()=>{
    console.log("app is listening to the port 8080");
})