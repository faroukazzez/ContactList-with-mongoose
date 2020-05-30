const express=require("express")
const router=express.Router()
const Contact=require("../Models/Contact")

router.get("/",(req,res)=>{
    Contact.find().then((data)=>{
        res.send(data)
    })
})
router.post("/add",(req,res)=>{
    const {contactname,contactadress,email}=req.body
    var newContact=new Contact({
        contactname,
        contactadress,
        email
    });
    newContact.save().then(() => res.send({msg:"contact added"}));

})

 router.get("/:id", (req, res) => {
     Contact.findById(req.params.id)
       .then((contact) => res.json(contact))
       .catch((err) => console.log(err));
   });
  
  //delete
   router.delete("/:id", (req, res) => {
     Contact.findByIdAndDelete(req.params.id)
       .then(() => res.json({ msg: "contact deleted" }))
       .catch((err) => {
         console.log(err);
       });
   });
  
   //edit 
   router.put("/edit/:id", (req, res) => {
     Contact.findByIdAndUpdate(
       req.params.id,
      { $set: { ...req.body } },
       (err,data) => {
         Contact.findById(req.params.id).then((contact) => res.send(contact));
       });
 });

module.exports=router