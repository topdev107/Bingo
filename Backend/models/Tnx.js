const mongoose = require('mongoose');

const TnxSchema = new mongoose.Schema({
  sender_address: {
    type: String,
    required: true
  },
  receiver_address: {
    type: String,
    required: true
  },
  type: {
    type: String,    
  }
}, {timestamps: true});

module.exports =  mongoose.model('transaction', TnxSchema);
