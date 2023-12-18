const express = require('express');
const app = express();
const router = require("../routes/router.js");
require('../src/db/conn.js');
const path= require("path")
const port=process.env.PORT || 3004
const serviceRouter =require('../routes/ServiceReqRouter.js')




app.use(express.static('Public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());





app.use("/", router);
app.use("/service",serviceRouter)



app.listen(port,()=>{
    console.log("running at port "+port);
})