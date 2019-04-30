const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Models
const Cv = require("../../models/Cv");

// @route   POST "/api/cv/new-cv"
// @desc    Create a new CV
// @access  private
router.post(
  "/new-cv",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Create new CV object
    const newCv = new Cv({
      user: req.user.id,
      personal: req.body.personal,
      skills: req.body.skills,
      jobs: req.body.jobs,
      education: req.body.education
    });

    // Save to DB
    newCv.save().then(cv => res.json(cv));
  }
);

// @route   GET "/api/cv"
// @desc    Get all CVs for user
// @access  private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Cv.find({ user: req.user.id }).then(cvs => res.json(cvs));
  }
);

module.exports = router;
