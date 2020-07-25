const EventEmitter = require('events').EventEmitter;
const evt = new EventEmitter();

module.exports = {
  saveData: function(data) {
    
    evt.emit('myEvent', data);
  },
  onDataChange: function(handler) {
    evt.on('myEvent', handler);
  }
};
