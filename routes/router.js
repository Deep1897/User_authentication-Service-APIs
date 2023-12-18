const express = require('express');
const router = express.Router();
const app=express();

const {registerUsers,
    loginUser,
    currentUser,changePassword,
    DeleteAccount,
    userpasswordReset,
    sendOtpMail,userpasswordResetOtp,
    homePage,veriSingleOtp,changePasswordByOtp,changePasswordByotp} =require("../Controller/AuthController.js")
const validateToken=require("../middleware/validateTokenHandler.js")
const path=require("path");

const serviceController=require('../Controller/ServiceReqController.js')



// template_path=path.join(__dirname,"../template/views/")
// console.log("template_path: ",template_path);
// app.use(express.static("public"));
// app.set("view engine","ejs");
// app.set("views",template_path);

// // hbs.registerPartials(template_path);

 router.get("/",homePage);
// ----------------------------------------------AuthController-Router----------------------------------------------------
router.route("/register").post(registerUsers)
router.route("/verifyotp").post(veriSingleOtp)
router.route("/login").post(loginUser)
router.get("/current",validateToken,currentUser)
router.post("/change_password",validateToken,changePassword);
router.get("/delete_account",validateToken,DeleteAccount );
router.get("/sendotp",validateToken,changePasswordByOtp)
router.post("/changepasswordbyotp",validateToken,changePasswordByotp)
//------------------------------------------------------------------------------------------------------------------------

router.post('/createservice',validateToken,serviceController.createService)


module.exports = router;