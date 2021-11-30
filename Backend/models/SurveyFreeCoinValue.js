const mongoose = require('mongoose');

const SurveyFreeCoinValueSchema = new mongoose.Schema({
  freecoinvalue: {
    type: String,
    required: true
  },
  unit: {
    type: String,
    required: true,
    default: "Micro Algo"
  }
}, {timestamps: true});

module.exports =  mongoose.model('survey_freecoin_value', SurveyFreeCoinValueSchema);
