const express=require('express')

const router=express.Router();

const home=async (req,res)=>{
    try{

        return res.status(200).json({message:"Welcome to Forms"})

    }catch(err){
        return res.status(401).json({message:`error in create form${err}`})
    }
}

router.get('/',home);
router.use('/form',require('./form'));

module.exports=router;