const express = require('express');
const ServiceModel=require('../src/models/ServiceReqModel.js')

class ServiceController{

    //   user_Id: 
    //   firstname: 
    //   lastname: 
    //   email: 
    //   contactnumber: 
    //   alternatenumber: 
    //   paymentMode: 
    //   servicbrouch: 

    static createService= async (req,res)=>{

        try {

            

            const {firstname,lastname,email,contactnumber,alternatenumber,paymentMode,servicbrouch,pickuplocation,status}=req.body;
            
            if(!firstname ||!lastname ||!email||!contactnumber ||!alternatenumber ||!paymentMode ||!servicbrouch || !pickuplocation|| !status){
               res.status({message:'all fields are mandatory'})
            }

            else{
               
              const services=await ServiceModel.create({
                     user_Id: req.user.id,
                     firstname: firstname,
                     lastname: lastname,
                     email: email,
                     contactnumber: contactnumber,
                     alternatenumber: alternatenumber,
                     paymentMode: paymentMode,
                     servicbrouch:servicbrouch,
                     pickuplocation:pickuplocation,
                     status:status
               });
       
               if(services){
                    res.status(200).json({message:"services creates successfully !",services})
               }else{
                   res.status(400).json({message:'services are not created'})
               }
       
       
       
            }
            
        } catch (error) {
            res.status(400).json({message:error});
        }
    

          

    }


    static getAllData= async (req,res)=>{
       const  id=req.user.id;
      const alldata= await ServiceModel.find({user_Id:id});
      if(!alldata){
        res.status(400).json({message:'No data available'})
      }else{
        res.status(200).json({alldata})
      }
    }


    static updataServices = async (req,res)=>{

      try {

        const {firstname,lastname,email,contactnumber,alternatenumber,paymentMode,servicbrouch,pickuplocation,status}=req.body;
        const gmail= req.params.gmail
         const  id=req.user.id;
         const new_user= await ServiceModel.find({email:gmail});
         console.log(new_user)
         let uid=new_user[0]._id
         console.log("uid",uid)
         
 
        const updated_user= await ServiceModel.findByIdAndUpdate(uid,{
         user_Id: req.user.id,
         firstname: firstname,
         lastname: lastname,
         email: email,
         contactnumber: contactnumber,
         alternatenumber: alternatenumber,
         paymentMode: paymentMode,
         servicbrouch:servicbrouch,
         pickuplocation:pickuplocation,
         status:status
 
 
 
        });
 
        const userupdatSuccess= await ServiceModel.find({email:gmail});
 
        if(updated_user){
         res.status(200).json({message:'Data Updated successfully',userupdatSuccess})
        }
        else{
         res.status(200).json({message:'Data Not Updated successfully'})
        }
 
        
      } catch (error) {
          res.status(400).json({message:'some internal error'})
      }


    }


    static deleteServices= async  (req,res)=>{
      
      try {

        const email=req.body.email;


        if(email){
  
          const deletedOne = await ServiceModel.deleteOne({email})
           
          if(deletedOne){
            
            res.status(200).json({message:'Services Deleted successfully'})
          }else{
            res.status(400).json({message:'Email is not available'})
          }
  
        }else{
          res.status(400).json({message:'All fields are mandatory'})
        }
       
  
        
      } catch (error) {
        res.status(400).json({message:'Some internal error',error})
      }
      
      
     

    }

    static getServiceByEmail= async (req,res)=>{
      

      try {

        const {gmail}= req.body
        console.log(gmail)
      if(gmail){

             const getdataByemail= await ServiceModel.find({email:gmail});
           if(getdataByemail){
             res.status(200).json({message:getdataByemail})
           }else{
             res.status(200).json({message:"Email does not exist"})
           }
        
      }else{
        res.status(200).json({message:"All fields are mandatory"})
      }
        
      } catch (error) {
        res.status(400).json({message:"Some internal error"})
      }
      
      




    }





}

module.exports=ServiceController;