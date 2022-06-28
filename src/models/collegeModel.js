const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
  name: { type: String, required: "College name is required", unique: true },
  fullName: { type: String, required: "Full name of college is required" },
  logoLink: { type: String, required: "Logo link is required" },
  isDeleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("College", collegeSchema);
