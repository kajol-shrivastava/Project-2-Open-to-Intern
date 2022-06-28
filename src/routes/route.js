const express = require("express");
const { createCollege } = require("../controllers/collegeController");
const { createIntern } = require("../controllers/internController");
const router = express.Router();

router.post("/functionup/colleges", createCollege);
router.post("/functionup/interns", createIntern);
// router.get("/functionup/collegeDetails", getDetails);

module.exports = router;
