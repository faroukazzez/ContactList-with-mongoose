const mongoose=require('mongoose')
const contactSchema=mongoose.Schema({
    contactname:{
        type:String,
        required:true
    },
    contactadress:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },

})
module.exports=mongoose.model("contact",contactSchema);