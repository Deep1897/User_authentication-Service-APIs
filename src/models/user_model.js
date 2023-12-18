const express=require("express");
const mongoose=require("mongoose");

const schemadata= new mongoose.Schema({
    

    firstname:{
        type:String,
        required:true,
        
        

    },
    lastname:{
        type:String,
        required:true,
       

    },

    address:{
        type:String,
        required:true,
        

    },

    email:{
         type:String,
         required:true,
         unique:true,
    },
    password:{
        type:String,
        required:true,

    },

    mobilenumber:{
        type:Number,
        

    },
    alternatenumber:{
        type:Number,
        

    },
    

},{
    timestamps:true,

})


const Models=new mongoose.model("JWT-Data",schemadata);
module.exports=Models;