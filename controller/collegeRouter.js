const express=require("express")
const collegeModel= require("../models/collegeModel")


const router = express.Router()

router.post("/add",async(req,res)=>{
    let data = req.body
    let college = new collegeModel(data)
    let result =await college.save()
    res.json({
        status:"success"
    })
})

module.exports=router