const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minglength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
});

module.exports = User = mongoose.model("user", UserSchema);
