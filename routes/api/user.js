const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

// @route   POST api/users
// @desc    User registration
// @access  Public
router.post(
  "/",
  [
    check("email", "Wymagany adres e-mail.").not().isEmpty(),
    check("email", "Podany adres e-mail jest nieprawidłowy.").isEmail(),
    check("password", "Hasło musi mieć minimum 6 znaków").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // If user exists
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({
          errors: [
            { msg: "Użytkownik o podanym adresie e-mail już istnieje." },
          ],
        });
      }

      const avatarURL = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      user = new User({
        email,
        avatarURL,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return token
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtToken"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Błąd serwera");
    }
  }
);

module.exports = router;
