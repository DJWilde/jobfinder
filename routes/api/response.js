const express = require("express");
const request = require("request");
const router = express.Router();
const auth = require("../../middleware/auth");
const checkObjectId = require("../../middleware/checkObjectId");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");
const Offer = require("../../models/Offer");

module.exports = router;
