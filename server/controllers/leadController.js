const Lead = require("../models/Lead.js");
const { isValidPhone } = require("../utils/phoneValidator.js");
const { notifyAdmin } = require("../utils/notifier.js");
const { sendWhatsAppNotification } = require("../services/whatsappService.js");
const { scoreLead } = require("../services/leadScoringService.js");

const createLead = async (req, res) => {
  try {
    const { name, phone, vertical, source, attribution } = req.body;

    if (!name || !phone || !vertical) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!isValidPhone(phone)) {
      return res.status(400).json({ error: "Invalid phone number" });
    }

    const { score, intent } = scoreLead({
      vertical,
      campaign: attribution?.campaign || source,
      createdAt: new Date()
    });

    const lead = await Lead.create({
      name,
      phone,
      vertical,
      source,
      attribution,
      score,
      intent
    });

    
    sendWhatsAppNotification(lead);
    notifyAdmin(lead);

    res.status(201).json({
      message: "Lead created successfully",
      lead
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Leads
const getLeads = async (req, res) => {
  const leads = await Lead.find().sort({ createdAt: -1 });
  res.json(leads);
};

// Analytics Summary
const getSummary = async (req, res) => {
  const totalLeads = await Lead.countDocuments();
  const topVertical = await Lead.aggregate([
    { $group: { _id: "$vertical", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 1 }
  ]);

  res.json({
    totalLeads,
    topVertical: topVertical[0]?._id || "N/A"
  });
};

module.exports = { createLead, getLeads, getSummary };
