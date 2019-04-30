const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const passport = require("passport");

const router = express.Router();
const User = require("../../models/User");
const { secret } = require("../../config/keys");

// Reading keys
const privateKey = fs.readFileSync("./config/private.key", "utf8");

//@route    GET /api/user/test
//@desc     Test if router works
//@access   Public
router.get("/test", (req, res) => {
  res.json({
    test: "works"
  });
});

//@route    POST /api/user/signup
//@desc     Creates a new User
//@access   Public
router.post("/signup", (req, res) => {
  // TODO: validate entries and create a error object

  //Check if user exists
  User.findOne({
    email: req.body.email
  }).then(user => {
    // If exists, send error
    if (user) {
      res.status(400).json({ user: "User already exists" });
    } else {
      // if not, creates a new User
      const { password } = req.body;
      bcrypt.hash(password, 10, (err, hash) => {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: hash,
          date: req.body.date
        });
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    }
  });
});

//@route    POST /api/user/login
//@desc     Login User and send JWT
//@access   Public
router.post("/login", (req, res) => {
  // TODO: Validation

  const { email, password, remember } = req.body;

  User.findOne({ email }).then(user => {
    if (!user) {
      res.json({ user: "User does not exist" });
    } else {
      console.log(user);
      // Compare Passwords
      bcrypt.compare(password, user.password).then(isMatch => {
        if (!isMatch) res.status(400).json({ password: "Password incorrect" });

        // JWT payload
        const payload = {
          id: user._id,
          name: user.name,
          email: user.email
        };

        // JWT Options
        const signOptions = {
          algorithm: "RS256"
        };
        remember ? null : (signOptions.expiresIn = "6h");
        // JWT sign and send token
        jwt.sign(payload, privateKey, signOptions, (err, token) => {
          res.json({ success: true, token: "Bearer " + token });
        });
      });
    }
  });
});

//@route    GET /api/user/current
//@desc     Get current User
//@access   Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      email: req.user.email,
      name: req.user.name
    });
  }
);

module.exports = router;
