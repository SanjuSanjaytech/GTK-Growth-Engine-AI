const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  vertical: { type: String, required: true },
  source: { type: String, default: "Google Ads" },
  score: { type: Number, default: 0 },
  attribution: {
    campaign: String,
    adGroup: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Lead", leadSchema);