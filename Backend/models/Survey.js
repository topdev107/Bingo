const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }, // text, option, checkbox
  state: {
    type: String,
    required: true,
    default: "show"
  }, // "show"/"hidden" on client page
  answers: {
    type: [String]
  }
}, {timestamps: true});

module.exports =  mongoose.model('survey', SurveySchema);
