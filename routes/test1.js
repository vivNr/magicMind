const service = require("../service/commun");
// listen for events



const express = require('express');
const router = express.Router();
router.get('/',function(req,res){    
    service.onDataChange(function(e, data) {
      console.log(data)
  }); res.send("Get all users.");
});

