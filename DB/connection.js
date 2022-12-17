require('dotenv').config();
const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/collegemng";
const connect = async () => {
  try {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('connected to mongodb');
  } catch (error) {
    console.error(error);
  }
};
module.exports = { connect };