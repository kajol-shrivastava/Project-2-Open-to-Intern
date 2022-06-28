const mongoose = require("mongoose");
const objectId = mongoose.Types.Schema.ObjectId;

const internSchema = new mongoose.Schema({
  name: { type: String, require: "Name is required" },
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
  mobile: { type: Number, require: "Mobile number is required", unique: true },
  collegeId: { type: objectId, ref: "college" },
  isDeleted: { type: boolean, default: false },
});

module.exports = mongoose.model("Intern", internSchema);
