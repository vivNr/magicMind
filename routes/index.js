const express = require("express");
const router = express.Router();
const authentication=require("../middleware/authentication");


const teacherController=require("../controllers/teacherController");
router.post("/signUpTeacher", teacherController.signUpTeacher); //teache signup
router.post("/loginTeacher", teacherController.loginTeacher); //teacher login




const studentController=require("../controllers/studentController");
router.post("/addStudent",authentication, studentController.addStudent); //add student
router.get("/getAllStudent",authentication, studentController.getAllStudent); //get all students
router.use('/test1', require('./test1').router);









module.exports = router;
