const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const Feedback = require('./models/Feedback');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/critique_corner', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.post('/submit-feedback', async (req, res) => {
    try {
      const feedbackData = req.body;
      const newFeedback = new Feedback(feedbackData);
      await newFeedback.save();
      res.status(200).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error submitting feedback', error });
    }
});

const adminSchema = new mongoose.Schema({
    name: String,
    username: String,
    gender: String,
    password: String,
    email: String,
  });
  
  const Admin = mongoose.model('Admin', adminSchema);
  
  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }
  
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }
  
    res.json({ message: 'Login successful' });
  });

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
