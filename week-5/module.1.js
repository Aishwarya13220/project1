var fs=require("fs")
fs.writeFile("demo.txt","good bye",(err,data)=>{
    console.log("data written sucessfully")
})
