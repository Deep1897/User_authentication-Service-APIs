const express = require('express');
const serviceRouter = express.Router();
const app=express();
const validateToken=require('../middleware/validateTokenHandler.js')
const ServiceController=require('../Controller/ServiceReqController.js')


serviceRouter.use(validateToken);

serviceRouter.post('/createservice',ServiceController.createService);

serviceRouter.get('/getalldata',ServiceController.getAllData);

serviceRouter.post('/updatedata/:gmail',ServiceController.updataServices);


serviceRouter.post('/deleteservices',ServiceController.deleteServices);


serviceRouter.post('/getServiceByEmail',ServiceController.getServiceByEmail);


module.exports=serviceRouter;

