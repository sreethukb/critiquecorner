const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  feedback_for: { type: String, required: true },
  productname: { type: String, required: true },
  feedback: { type: String, required: true },
  rating: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
