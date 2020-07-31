const express = require("express");
const request = require("request");
const router = express.Router();
const auth = requre("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");
const Employee = require("../../models/Employee");

// @route   GET api/employee/me
// @desc    Get employee's profile
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const employee = Employee.findOne({
      user: req.user.id,
    }).populate("user", [
      "address",
      "location",
      "email",
      "avatar",
      "postcode",
      "voivodeship",
      "country",
      "phoneNumber",
    ]);

    if (!employee) {
      return res.status(400).json({
        msg: "Profil dla danego pracownika nie istnieje",
      });
    }

    res.json(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Błąd serwera");
  }
});

// @route   POST api/employee
// @desc    Create profile for the employee
// @access  Private

// @route   PUT api/employee/experience
// @desc    Add employee's experience
// @access  Private

// @route   PUT api/employee/experience/:exp_id
// @desc    Update employee's experience
// @access  Private

// @route   DELETE api/employee/experience/:exp_id
// @desc    Delete employee's experience
// @access  Private

// @route   PUT api/employee/education
// @desc    Add employee's education
// @access  Private

// @route   PUT api/employee/education/:edu_id
// @desc    Update employee's education
// @access  Private

// @route   DELETE api/employee/education/:edu_id
// @desc    Delete employee's education
// @access  Private

// @route   PUT api/employee/language
// @desc    Add employee's foreign language
// @access  Private

// @route   PUT api/employee/language/:lang_id
// @desc    Update employee's foreign language
// @access  Private

// @route   DELETE api/employee/language/:lang_id
// @desc    Delete employee's foreign language
// @access  Private

// @route   PUT api/employee/skills
// @desc    Add employee's skills
// @access  Private

// @route   PUT api/employee/skills/:skill_id
// @desc    Update employee's skill
// @access  Private

// @route   DELETE api/employee/skills/:skill_id
// @desc    Delete employee's skill
// @access  Private

// @route   DELETE api/employee
// @desc    Delete employee's profile
// @access  Private

module.exports = router;
