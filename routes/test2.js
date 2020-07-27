const service = require("../service/commun");
// listen for events
const express = require('express');
const router = express.Router();

router.get('/t2getData',function(req, res){    
  service.onDataChange(function(e, data) {
    console.log(data)
}); res.send(data);
});

router.post('/t2SendData', function(req, res) {
  const data=req.body.data;
  service.saveData(data);
});

module.exports.router = router;