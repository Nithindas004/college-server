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

router.get("/view",async(req,res)=>{
    let data=await collegeModel.find()
    res.json(data)
})

module.exports=router