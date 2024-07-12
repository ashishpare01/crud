// Require necessary packages
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Load environment variables
const { MONGO_URI } = process.env;

// Load Mongoose models
const Login = require('./models/login'); // Adjust path as per your project structure

// Seed data
const userData = [
  { f_userName: 'samiksha', f_Pwd: 'MERN' },
];

// Function to connect to MongoDB and seed data
async function seed() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Hash passwords and create users
    const salt = await bcrypt.genSalt(10);
    const hashedUsers = await Promise.all(
      userData.map(async (user) => {
        const hashedPwd = await bcrypt.hash(user.f_Pwd, salt);
        return { f_userName: user.f_userName, f_Pwd: hashedPwd };
      })
    );

    // Clear existing data and insert new users
    await Login.deleteMany({});
    await Login.insertMany(hashedUsers);

    console.log('Data seeding complete');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
}

// Call the seed function
seed();
