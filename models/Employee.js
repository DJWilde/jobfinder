const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
  },
  bio: {
    type: String,
  },
  experience: [
    {
      position: {
        type: String,
        required: true,
      },
      nameOfCompany: {
        type: String,
        required: true,
      },
      location: {
        type: String,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
        required: true,
      },
      duties: {
        type: String,
      },
    },
  ],
  education: [
    {
      nameOfSchool: {
        type: String,
        required: true,
      },
      level: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
        required: true,
      },
      specialization: {
        type: String,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
        required: true,
      },
      description: {
        type: String,
      },
    },
  ],
  foreignLanguages: [
    {
      language: {
        type: String,
        required: true,
      },
      fluency: {
        type: String,
        required: true,
      },
    },
  ],
  skills: [
    {
      name: {
        type: String,
        required: true,
      },
      fluency: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = Employee = mongoose.model("employee", EmployeeSchema);
