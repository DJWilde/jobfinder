const mongoose = require("mongoose");

const EmployerSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    required: true,
  },
  typeOfCompany: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
  nip: {
    type: String,
  },
  founded: {
    type: String,
  },
});

module.exports = Employer = mongoose.model("employer", EmployerSchema);
