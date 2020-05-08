const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwtSecret = process.env.jwtSecret;
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

router.post("/", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User doesn't exists" });

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch)
        return res.status(400).json({ msg: "Invalid  credentials" });
      jwt.sign(
        { id: user.id },
        jwtSecret,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          });
        }
      );
    });
  });
});

module.exports = router;
