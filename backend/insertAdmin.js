const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost:27017/critique_corner', { useNewUrlParser: true, useUnifiedTopology: true });

const adminSchema = new mongoose.Schema({
  name: String,
  username: String,
  gender: String,
  password: String,
  email: String,
});

const Admin = mongoose.model('Admin', adminSchema);

const admins = [
  {
    name: 'Admin One',
    username: 'admin1',
    gender: 'Male',
    password: 'admin1password',
    email: 'admin1@example.com',
  },
  {
    name: 'Admin Two',
    username: 'admin2',
    gender: 'Female',
    password: 'admin2password',
    email: 'admin2@example.com',
  }, 
  {
    name: 'Tom Hilton',
    username: 'tom4hilton',
    gender: 'Male',
    password: 'tomhilton400',
    email: 'tom400hilton@gmail.com',
  }
];

const hashPasswordsAndInsert = async () => {
  for (let admin of admins) {
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(admin.password, salt);
    await Admin.create(admin);
  }
  console.log('Admins inserted successfully');
  mongoose.disconnect();
};

hashPasswordsAndInsert().catch(err => console.error(err));
