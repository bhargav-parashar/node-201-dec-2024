const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_URI);
    console.log("Connected to DB.");
  } catch (error) {
    console.log("Couldn't connect to DB!");
  }
};

module.exports = connectDB;
