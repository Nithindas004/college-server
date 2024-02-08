const mongoose = require("mongoose")

const collegeSchema = new mongoose.Schema(
    {
        collegeName:String,
        collegePhone:String,
        place:String,
        noofstud:String
    }
)

module.exports=mongoose.model("college",collegeSchema)