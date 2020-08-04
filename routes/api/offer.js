const express = require("express");
const request = require("request");
const router = express.Router();
const auth = require("../../middleware/auth");
const checkObjectId = require("../../middleware/checkObjectId");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");
const Offer = require("../../models/Offer");
const Employer = require("../../models/Employer");
const Response = require("../../models/Response");

// @route   POST api/offers
// @desc    Create an offer
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("position", "Wymagana pozycja").not().isEmpty(),
      check("location", "Wymagana lokalizacja").not().isEmpty(),
      check("typeOfAgreement", "Wymagany typ umowy").not().isEmpty(),
      check("length", "Wymagany wymiar etatu").not().isEmpty(),
      check("levelOfSpecialization", "Wymagany poziom specjalizacji")
        .not()
        .isEmpty(),
      check("until", "Wymagany termin ważności").not().isEmpty(),
      check("minSalary", "Wymagane minimalne zarobki").not().isEmpty(),
      check("maxSalary", "Wymagane maksymalne zarobki").not().isEmpty(),
      check("jobDescription", "Wymagany opis stanowiska").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const employer = await User.findById(req.user.id).select("-password");

      const newOffer = new Offer({
        employer: employer.id,
        position: req.body.position,
        location: req.body.location,
        typeOfAgreement: req.body.typeOfAgreement,
        length: req.body.length,
        levelOfSpecialization: req.body.levelOfSpecialization,
        until: req.body.until,
        minSalary: req.body.minSalary,
        maxSalary: req.body.maxSalary,
        jobDescription: req.body.jobDescription,
      });

      const offer = await newOffer.save();

      res.json(offer);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Błąd serwera");
    }
  }
);

// @route   GET api/offers
// @desc    Get all offers
// @access  Public
router.get("/", async (req, res) => {
  try {
    const offers = await Offer.find().sort({ date: -1 });
    res.json(offers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Błąd serwera");
  }
});

// @route   GET api/offers/:id
// @desc    Get offer by ID
// @access  Public
router.get("/:id", checkObjectId("id"), async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);

    if (!offer) {
      return res.status(404).json({ msg: "Nie znaleziono oferty" });
    }

    res.json(offer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Błąd serwera");
  }
});

// @route   DELETE api/offers/:id
// @desc    Delete offer by ID
// @access  Private
router.delete("/:id", [auth, checkObjectId("id")], async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);

    if (!offer) {
      return res.status(404).json({ msg: "Nie znaleziono oferty" });
    }

    // Check if the employer is the owner
    if (offer.employer.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Brak uprawnień" });
    }

    await offer.remove();

    res.json({ msg: "Oferta została usunięta" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Błąd serwera");
  }
});

// @route   POST api/offers/:id/response
// @desc    Create a response
// @access  Private
router.post(
  "/:id/response",
  [
    auth,
    [check("motivationLetter", "Wymagany list motywacyjny").not().isEmpty()],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const employee = await User.findById(req.user.id).select("-password");
      const offer = await Offer.findById(req.params.id);

      const newResponse = new Response({
        employee: employee.id,
        offer: req.params.id,
        motivationLetter: req.body.motivationLetter,
      });

      offer.responses.unshift(newResponse);

      await newResponse.save();

      await offer.save();

      res.json(offer.responses);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Błąd serwera");
    }
  }
);

// @route   DELETE api/offers/:id/response/:res_id
// @desc    Delete a response
// @access  Private
router.delete("/:id/response/:res_id", auth, async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);

    console.log(offer);

    const response = await Response.findById(req.params.res_id);

    console.log(response);

    if (!response) {
      return res.status(404).json({ msg: "Nie ma takiej odpowiedzi" });
    }

    if (response.employee.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Brak uprawnień" });
    }

    offer.responses = offer.responses.filter(
      ({ id }) => id !== req.params.res_id
    );

    await response.remove();

    await offer.save();

    return res.json(offer.responses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Błąd serwera");
  }
});

module.exports = router;
