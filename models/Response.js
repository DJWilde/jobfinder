const mongoose = require("mongoose");

const ResponseSchema = mongoose.Schema({
  offer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "offer",
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employee",
  },
  motivationLetter: {
    type: String,
    required: true,
  },
});

module.exports = Response = mongoose.model("response", ResponseSchema);
