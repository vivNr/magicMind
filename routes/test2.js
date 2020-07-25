const service = require("../service/commun");


const service = require("../service/commun");
// listen for events



const express = require('express');
const router = express.Router();
router.get('/',function(req,res){    
    const data="hello";
    service.saveData(data);
     res.send("Get all users.");
});

