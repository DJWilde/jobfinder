const express = require("express");
const request = require("request");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");
const Employer = require("../../models/Employer");

// @route   GET api/employer/me
// @desc    Get employer's profile
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const employer = await Employer.findOne({
      user: req.user.id,
    }).populate("user", [
      "address",
      "location",
      "email",
      "avatar",
      "postcode",
      "country",
      "phoneNumber",
    ]);

    if (!employer) {
      return res.status(400).json({
        msg: "Profil dla danego pracodawcy nie istnieje",
      });
    }

    res.json(employer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Błąd serwera");
  }
});

// @route   POST api/employer
// @desc    Create profile for the employer
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Wymagana nazwa firmy").not().isEmpty(),
      check("typeOfCompany", "Wymagany typ firmy").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, typeOfCompany, website, nip, founded } = req.body;

    const employerBody = {
      user: req.user.id,
      name,
      typeOfCompany,
      website,
      nip,
      founded,
    };

    try {
      let newEmployer = await Employer.findOneAndUpdate(
        { user: req.user.id },
        { $set: employerBody },
        { new: true, upsert: true }
      );

      res.json(newEmployer);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Błąd serwera");
    }
  }
);

module.exports = router;
