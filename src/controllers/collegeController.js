const collegeModel = require("../models/collegeModel");
const {
  isValidRequest,
  isValidName,
  isValid,
  isValidLink,
} = require("../validator/validator");

// create author
const createCollege = async function (req, res) {
  try {
    // input validation
    if (!isValidRequest(req.body))
      return res
        .status(400)
        .send({ status: false, message: "Please enter a valid input" });

    let { name, fullName, logoLink } = req.body;
    let college = {};

    // name validation
    if (name) {
      if (!isValidName(name))
        return res.status(400).send({
          status: false,
          message: "Please enter a valid college name",
        });
      // checking for duplicate data
      let clg = await collegeModel.findOne({ name: name });
      if (clg)
        return res
          .status(409)
          .send({ status: false, message: "College name is already present" });
      else college.name = name;
    } else
      return res
        .status(400)
        .send({ status: false, message: "College name is required" });

    // fullName validation
    if (fullName) {
      if (!isValid(fullName))
        return res
          .status(400)
          .send({ status: false, message: "Please enter a valid full name" });
      college.fullName = fullName;
    } else
      return res
        .status(400)
        .send({ status: false, message: "Full name of college is required" });

    // logo link validation
    if (logoLink) {
      if (!isValidLink(logoLink))
        return res
          .status(400)
          .send({ status: false, message: "Please enter a valid logo link" });
      college.logoLink = logoLink;
    } else
      return res
        .status(400)
        .send({ status: false, message: "Logo link is required" });

    let savedData = await collegeModel.create({ status: true, data: college });
    res.status(201).send({ status: true, data: savedData });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

module.exports = {
  createCollege,
};
