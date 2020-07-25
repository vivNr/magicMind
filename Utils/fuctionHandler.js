module.exports=function resposeSend(res,errCode,errMsg,result){
    const error={};
    const retArr={};
    error.errCode = errCode;
    error.errMsg = errMsg;
    retArr.error = error;
    retArr.result = result;
    res.json(retArr);
}