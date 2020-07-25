const service = require("../service/commun");
// listen for events
service.onDataChange(function(e, data) {
  console.log(data)
});