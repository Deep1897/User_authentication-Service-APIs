const mongoose=require("mongoose");



DB='mongodb+srv://softdeep065:Softdeep065@softdeep065.9kbktdy.mongodb.net/Test_API?retryWrites=true&w=majority'


mongoose.connect(DB).then(()=>console.log("Database connect successfull by mongodb atlas")).catch((err)=> console.log(err))