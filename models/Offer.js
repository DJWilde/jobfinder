const mongoose = require("mongoose");

const OfferSchema = mongoose.Schema({
  employer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employer",
  },
  position: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  typeOfAgreement: {
    type: String,
    required: true,
  },
  length: {
    type: String,
    required: true,
  },
  levelOfSpecialization: {
    type: String,
    required: true,
  },
  until: {
    type: Date,
    required: true,
  },
  minSalary: {
    type: String,
    required: true,
  },
  maxSalary: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  responses: [
    {
      response: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "response",
      },
    },
  ],
});

module.exports = Offer = mongoose.model("offer", OfferSchema);
