const express = require("express");
const request = require("request");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");
const Employee = require("../../models/Employee");

// @route   GET api/employee/me
// @desc    Get employee's profile
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const employee = await Employee.findOne({
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
router.post(
  "/",
  [
    auth,
    [
      check("firstName", "Wymagane imię").not().isEmpty(),
      check("lastName", "Wymagane nazwisko").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, dateOfBirth, bio } = req.body;

    const profileBody = {
      user: req.user.id,
      firstName,
      lastName,
      dateOfBirth,
      bio,
    };

    try {
      let newEmployee = await Employee.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileBody },
        { new: true, upsert: true }
      );
      res.json(newEmployee);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Błąd serwera");
    }
  }
);

// @route   PUT api/employee/experience
// @desc    Add employee's experience
// @access  Private
router.put(
  "/experience",
  [
    auth,
    [
      check("position", "Wymagana pozycja").not().isEmpty(),
      check("nameOfCompany", "Wymagana nazwa firmy").not().isEmpty(),
      check("from", "Wymagana data rozpoczęcia").not().isEmpty(),
      check(
        "from",
        "Data rozpoczęcia musi być w przeszłości"
      ).custom((value, { req }) => (req.body.to ? value < req.body.to : true)),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { position, nameOfCompany, location, from, to, duties } = req.body;

    const newExperience = {
      position,
      nameOfCompany,
      location,
      from,
      to,
      duties,
    };

    try {
      const employee = await Employee.findOne({ user: req.user.id });

      employee.experience.unshift(newExperience);

      await employee.save();

      res.json(employee);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Błąd serwera");
    }
  }
);

// @route   PUT api/employee/experience/:exp_id
// @desc    Update employee's experience
// @access  Private

// @route   DELETE api/employee/experience/:exp_id
// @desc    Delete employee's experience
// @access  Private
router.delete("/experience/:exp_id", auth, async (req, res) => {
  try {
    const employee = await Employee.findOne({ user: req.user.id });

    employee.experience = employee.experience.filter(
      (exp) => exp._id.toString() !== req.params.exp_id
    );

    await employee.save();
    return res.status(200).json(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Błąd serwera");
  }
});

// @route   PUT api/employee/education
// @desc    Add employee's education
// @access  Private
router.put(
  "/education",
  [
    auth,
    [
      check("nameOfSchool", "Wymagana nazwa szkoły").not().isEmpty(),
      check("level", "Wymagany stopień studiów").not().isEmpty(),
      check("degree", "Wymagany kierunek studiów").not().isEmpty(),
      check(
        "from",
        "Data rozpoczęcia musi być w przeszłości"
      ).custom((value, { req }) => (req.body.to ? value < req.body.to : true)),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      nameOfSchool,
      level,
      degree,
      specialization,
      from,
      to,
      description,
    } = req.body;

    const newEducation = {
      nameOfSchool,
      level,
      degree,
      specialization,
      from,
      to,
      description,
    };

    try {
      const employee = await Employee.findOne({ user: req.user.id });

      employee.education.unshift(newEducation);

      await employee.save();

      res.json(employee);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Błąd serwera");
    }
  }
);

// @route   PUT api/employee/education/:edu_id
// @desc    Update employee's education
// @access  Private

// @route   DELETE api/employee/education/:edu_id
// @desc    Delete employee's education
// @access  Private
router.delete("/education/:edu_id", auth, async (req, res) => {
  try {
    const employee = await Employee.findOne({ user: req.user.id });

    employee.education = employee.education.filter(
      (edu) => edu._id.toString() !== req.params.edu_id
    );

    await employee.save();
    return res.status(200).json(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Błąd serwera");
  }
});

// @route   PUT api/employee/language
// @desc    Add employee's foreign language
// @access  Private
router.put(
  "/language",
  [
    auth,
    [
      check("language", "Wymagany język").not().isEmpty(),
      check("fluency", "Wymagana biegłość języka").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { language, fluency } = req.body;

    const newLanguage = {
      language,
      fluency,
    };

    try {
      const employee = await Employee.findOne({ user: req.user.id });

      employee.foreignLanguages.unshift(newLanguage);

      await employee.save();

      res.json(employee);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Błąd serwera");
    }
  }
);

// @route   PUT api/employee/language/:lang_id
// @desc    Update employee's foreign language
// @access  Private

// @route   DELETE api/employee/language/:lang_id
// @desc    Delete employee's foreign language
// @access  Private
router.delete("/language/:lang_id", auth, async (req, res) => {
  try {
    const employee = await Employee.findOne({ user: req.user.id });

    employee.foreignLanguages = employee.foreignLanguages.filter(
      (lang) => lang._id.toString() !== req.params.lang_id
    );

    await employee.save();
    return res.status(200).json(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Błąd serwera");
  }
});

// @route   PUT api/employee/skills
// @desc    Add employee's skills
// @access  Private
router.put(
  "/skills",
  [
    auth,
    [
      check("name", "Wymagana nazwa umiejętności").not().isEmpty(),
      check("fluency", "Wymagany stopień zaawansowania").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, fluency } = req.body;

    const newSkill = {
      name,
      fluency,
    };

    try {
      const employee = await Employee.findOne({ user: req.user.id });

      employee.skills.unshift(newSkill);

      await employee.save();

      res.json(employee);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Błąd serwera");
    }
  }
);

// @route   PUT api/employee/skills/:skill_id
// @desc    Update employee's skill
// @access  Private

// @route   DELETE api/employee/skills/:skill_id
// @desc    Delete employee's skill
// @access  Private
router.delete("/skills/:skill_id", auth, async (req, res) => {
  try {
    const employee = await Employee.findOne({ user: req.user.id });

    employee.skills = employee.skills.filter(
      (skill) => skill._id.toString() !== req.params.skill_id
    );

    await employee.save();
    return res.status(200).json(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Błąd serwera");
  }
});

// @route   DELETE api/employee
// @desc    Delete employee's profile
// @access  Private
router.delete("/", auth, async (req, res) => {
  try {
    // @TODO Remove all responses upon deletion

    // Remove employee's account
    await Employee.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "Użytkownik został usunięty" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Błąd serwera");
  }
});

module.exports = router;
