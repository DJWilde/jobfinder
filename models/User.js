const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  avatar: {
    type: String,
  },
  location: {
    type: String,
  },
  postcode: {
    type: String,
  },
  voivodeship: {
    type: String,
  },
  country: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isEmployer: {
    type: Boolean,
    default: false,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
