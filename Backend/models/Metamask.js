const mongoose = require('mongoose');

const MetamaskSchema = new mongoose.Schema({
  phase: {
    type: String,
    required: true
  }
}, {timestamps: true});

module.exports =  mongoose.model('metamask', MetamaskSchema);
