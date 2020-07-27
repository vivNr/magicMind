const responseHandler=require("../Utils/fuctionHandler");
const dbmaster=require("../database/db_config_mysql").localConnect();
const commonFunc=require("../Utils/commonFunc")

//signUpTeacher
const signUpTeacher=(req,res)=>{
  const result=[];
 const id=commonFunc.generateUniqueIds()
    try{
      const sql=`insert into tbl_teacher set id=`+id+` ,userName='`+req.body.userName+`' 
       ,schoolId='`+req.body.schoolId+`' ,password='`+req.body.password+`'`;
        dbmaster.query(sql, (err, rows) => {
            if (err) {
                console.log(err);
                return;
            }
            responseHandler(res,0,"success",result)
        });
    }catch(err){
        responseHandler(res,1,"fail",err)
 
    }
}

//loginTeacher
const loginTeacher=(req,res)=>{
 
    const result=[];
       try{
         const sql=`select * from tbl_teacher where userName='`+req.body.userName+`' and password='`+req.body.password+`'`;
           dbmaster.query(sql, (err, rows) => {
               if (err) {
                responseHandler(res,1,"fail",[])
                return;
               }
               if(rows && rows.length){
                const token= commonFunc.generateJwtToken(rows[0].id)
                result.push(token)
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
    signUpTeacher:signUpTeacher,
    loginTeacher:loginTeacher
}