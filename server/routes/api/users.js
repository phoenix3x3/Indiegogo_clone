const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwtSecret = process.env.jwtSecret;
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const auth = require("../../middleware/auth");

router.post("/registration", (req, res) => {
  const { name, lastName, email, password } = req.body;

  if (!name || !email || !password || !lastName) {
    return res.status(400).json({ msg: "Please enter all fields!" });
  }

  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new User(req.body);

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            {
              id: user.id,
            },
            jwtSecret,
            {
              expiresIn: 3600,
            },
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
  });
});
router.post("/login", (res, req) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please etner all fields" });
  }

  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User doesn't exist" });
  });

  bcrypt.compare(password, user.password).then((isMatch) => {
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid password" });
    }
    jwt.sign(
      { id: user.id },
      jwtSecret,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
      },
      res.json({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      })
    );
  });
});

router.get("/auth", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

module.exports = router;
