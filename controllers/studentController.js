const responseHandler=require("../Utils/fuctionHandler");
const dbmaster=require("../database/db_config_mysql").localConnect();
const commonFunc=require("../Utils/commonFunc");


//addMarks
const addMarks=(req,res,studentID)=>{


    return new Promise(function(resolve,reject){
        try{
            let grade='pass';
            const TotalMarks =req.body.TotalMarks
          if(TotalMarks<50){
            grade='fail'
          }
          
            const id=commonFunc.generateUniqueIds()
            const sql=`insert into tbl_marks set id='`+id+`' ,studentId='`+studentID+`' 
             ,totalMarks='`+req.body.TotalMarks+`' ,grade='`+grade+`' ,teacherId='`+req.body.teacherId+`'`;
              dbmaster.query(sql, (err, rows) => {
                  if (err) {
                    reject(err);
                  }
                resolve(1)
              });
          }catch(err){
            reject(err);       
          }
    })
    
}

//addStudent
const addStudent=(req,res)=>{
  const result=[];
 const id=commonFunc.generateUniqueIds()
    try{
      const sql=`insert into tbl_student set id='`+id+`' ,studentName='`+req.body.StudentName+`' 
       ,schoolId='`+req.body.schoolId+`' ,class='`+req.body.class+`' ,roll='`+req.body.Roll+`'`;
        dbmaster.query(sql,async (err, rows) => {
            if (err) {
                responseHandler(res,1,"fail",err)
                return;
            }
          await  addMarks(req,res,id)
            responseHandler(res,0,"success",result)
        });
    }catch(err){
        responseHandler(res,1,"fail",err)
 
    }
}

//getAllStudent
const getAllStudent=(req,res)=>{
 
    const result=[];
       try{
          const sql=`    SELECT 
          s.studentName, 
          s.roll, 
          s.class, 
          s.schoolId,
          m.totalMarks,
          m.grade,
          m.teacherId
         FROM
         tbl_student s
        INNER JOIN tbl_marks m
        ON s.id = m.studentId`;
      
           dbmaster.query(sql, (err, rows) => {
               if (err) {
                responseHandler(res,0,"success",result)
                return;
               }
               if(rows && rows.length){
                result.push(rows)
                responseHandler(res,0,"success",result)
               }else{
                responseHandler(res,0,"no result found",[])

               }
             
           });
       }catch(err){
           responseHandler(res,1,"fail",err)
    
       }
}

module.exports={
    addStudent:addStudent,
    getAllStudent:getAllStudent
}