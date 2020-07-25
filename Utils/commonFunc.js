const jwt= require("jsonwebtoken");


const getRandomInt=(min,max)=>{
    return Math.floor(Math.random() * (max - min)) + min;
}
 const  generateUniqueIds=()=>{
    var dTime = new Date().getTime();
    var genaratedId;
    var rNum = getRandomInt(1, 9);
    genaratedId = '' + rNum + '' + dTime;
    return genaratedId;
    }
  
  const  generateJwtToken=(userName)=>{
        const token = jwt.sign({
            userName:userName,
        }, process.env.SECRET_KEY);
        return token;
    }


    module.exports={
        generateJwtToken:generateJwtToken,
        generateUniqueIds:generateUniqueIds
    }


