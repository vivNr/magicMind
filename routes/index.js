const express = require("express");
const router = express.Router();
const jwt= require("jsonwebtoken");
const responseHandler=require("../Utils/fuctionHandler");



router.get("/checkAPi", (req, res, next) => {
    res.json("magic mind test api");
});

const authentication=(req,res,next)=>{
  const auth=req.headers['authorization'];
  if(!auth){
    responseHandler(res,1,"invalid user",[])
    return;
  }  
    jwt.verify(auth, process.env.SECRET_KEY, function (err, decoded) {
   if(err){
    responseHandler(res,1,"invalid user",[])
    return;
   }if(!decoded.userName){
    responseHandler(res,1,"invalid user",[])

   }else{
    req["body"].teacher=decoded.userName;
     next();  
   }
    });
}

const teacherController=require("../controllers/teacherController");
router.post("/signUpTeacher", teacherController.signUpTeacher); //version
router.post("/loginTeacher", teacherController.loginTeacher); //version




const studentController=require("../controllers/studentController");
router.post("/addStudent",authentication, studentController.addStudent); //version
router.post("/getAllStudent",authentication, studentController.getAllStudent); //version








module.exports = router;
