const mongoose = require("mongoose");

const registermodule = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  bloodgroup: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Registeredstudents", registermodule);
