const express=require('express')

const router=express.Router();

const forms =require('../controllers/form')

router.post('/create',forms.createForm);

module.exports=router;