const express =require('express')
var app=express()
let students=[{"id":"1","name":"raj","branch":"IT"},
    {"id":"2","name":"ram","branch":"CSE"}
    ]
app.get("./students",(req,res)=>{
    res.json(students)
    app.get("/student/:id")
    app.listen(2000,()=>{
        console.log("server started")
    })
})