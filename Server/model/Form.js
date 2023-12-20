const mongoose=require('mongoose');
//To create our data layout and type
const formSchema=mongoose.Schema({
    
        date:{
            type:String,
            default:new Date()
        },
        dueDate:{
            type:String,
            required:true,
        },
        tName:{
            type:String,
            required:true,
        },
        tEmail:{
            type:String,
            required:true,
        },
        tAddress:{
            type:String,
            required:true,
        },
        fName:{
            type:String,
            required:true,
        },
        fEmail:{
            type:String,
            required:true,
        },
        fAddress:{
            type:String,
            required:true,
        },
        item:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        currency:{
            type:String,
            required:true,
        },
        qty:{
            type:Number,
            required:true
        },
        rate:{
            type:String,
            required:true,
        },
        subtotal:{
            type:String,
            required:true,
        },
        discount:{
            type:String,
            required:true,
        },
        tax:{
            type:String,
            required:true,
        },
        total:{
            type:String,
            required:true,
        },
        notes:{
            type:String,
        }

});

const Form=mongoose.model("Form",formSchema);

module.exports=Form;