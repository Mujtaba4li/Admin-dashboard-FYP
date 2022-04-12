// const { verify } = require("jsonwebtoken");
const mongoose = require("mongoose");

const DonorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  verify_status: {
    type: Boolean,
    required: true,
  }
},{collection:'user-date'}
);

module.exports = mongoose.model("user", UserSchema);