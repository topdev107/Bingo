const mongoose = require('mongoose');

const WalletSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true
  },
  published_date: {
    type: Date,
    default: Date.now
  },
  owner: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports =  mongoose.model('wallet', WalletSchema);
