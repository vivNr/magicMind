const express = require("express");
const router = express.Router();
const authentication=require("../middleware/authentication");


const teacherController=require("../controllers/teacherController");
router.post("/signUpTeacher", teacherController.signUpTeacher); //version
router.post("/loginTeacher", teacherController.loginTeacher); //version




const studentController=require("../controllers/studentController");
router.post("/addStudent",authentication, studentController.addStudent); //version
router.post("/getAllStudent",authentication, studentController.getAllStudent); //version








module.exports = router;
