const Form=require('../model/Form');

//this req.body and data from front end is same 
module.exports.createForm=async (req,res)=>{
    try{

       const {date, dueDate,tName,tEmail,tAddress,fName,fEmail,fAddress,item,description,currency,qty,rate,subtotal,discount,tax,total,notes}=req.body;

        const newForm=await Form.create({
            date, dueDate,tName,tEmail,tAddress,fName,fEmail,fAddress,item,description,currency,qty,rate,subtotal,discount,tax,total,notes
        });
        
        console.log(newForm)
        return res.status(200).json({message:"New Form has been created", form:newForm})

    }catch(err){
        return res.status(401).json({message:`error in create form${err}`})
    }
}