const express = require("express");

const {
  createCollege,
  getDetails,
} = require("../controllers/collegeController");

const { createIntern } = require("../controllers/internController");
const router = express.Router();

//<<------------------------------------------API Create College----------------------------------------------->>
router.post("/functionup/colleges", createCollege);

//<<-----------------------------------------API Create Intern-------------------------------------------------->>
router.post("/functionup/interns", createIntern);

//<<-----------------------------------------API get Interns--------------------------------------------------->>
router.get("/functionup/collegeDetails", getDetails);


module.exports = router;
