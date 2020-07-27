const EventEmitter = require('events').EventEmitter;
const evt = new EventEmitter();
//event for communication betwwen two route
module.exports = {
  saveData: function(data) {
    
    evt.emit('myEvent', data);
  },
  onDataChange: function(handler) {
    evt.on('myEvent', handler);
  }
};


