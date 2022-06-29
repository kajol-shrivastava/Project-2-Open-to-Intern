const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const internSchema = new mongoose.Schema({
  name: { type: String, required: "Name is required" },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
  },
  mobile: { type: Number, required: "Mobile number is required", unique: true },
  collegeId: { type: objectId, ref: "college" },
  isDeleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("Intern", internSchema);
