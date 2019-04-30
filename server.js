const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

//Routes
const userRoute = require("./routes/api/user");
const cvRoute = require("./routes/api/cv");

// App init
const app = express();

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conect to MongoDB
const { mongoURI } = require("./config/keys");
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("> MongoDB connected"))
  .catch(err => console.log(err));

// Passport Middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

// User Routes
app.use("/api/user", userRoute);

// CV Routes
app.use("/api/cv", cvRoute);

// Start Server
const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`> Server running on port ${PORT}`));
