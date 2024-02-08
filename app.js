const express= require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const collegeRoute = require("./controller/collegeRouter")

const app= express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://nithindas1234:1234nith@cluster0.lvn9hia.mongodb.net/collegeDb?retryWrites=true&w=majority",
{useNewUrlParser: true})

app.use("/api/college",collegeRoute)

app.listen(3001,()=>{
    console.log("Server Running..")
})