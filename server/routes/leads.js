const express = require("express");
const {
  createLead,
  getLeads,
  getSummary
} = require("../controllers/leadController.js");

const router = express.Router();

router.post("/", createLead);
router.get("/", getLeads);
router.get("/summary", getSummary);

module.exports = router;
