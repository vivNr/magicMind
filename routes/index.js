const express = require("express");
const router = express.Router();
const authentication=require("../middleware/authentication");


const teacherController=require("../controllers/teacherController");
router.post("/signUpTeacher", teacherController.signUpTeacher); //version
router.post("/loginTeacher", teacherController.loginTeacher); //version




const studentController=require("../controllers/studentController");
router.post("/addStudent",authentication, studentController.addStudent); //version
router.get("/getAllStudent",authentication, studentController.getAllStudent); //version
router.use('/test1', require('./test1').router);

// require('./test1').router;
// require('./test2').router;







module.exports = router;
