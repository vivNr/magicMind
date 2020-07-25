  
  
const jwt= require("jsonwebtoken");
const responseHandler=require("../Utils/fuctionHandler");
  
  module.exports=function resposeSend(req,res,next){
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