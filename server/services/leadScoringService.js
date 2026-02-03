// This is the mock AI lead scoring service
// This simulates how an ML model would score leads

function scoreLead({ vertical, campaign, createdAt }) {
  let score = 0;

  // Business intent
  if (vertical) score += 30;

  // Campaign quality
  if (campaign && campaign.toLowerCase().includes("morning")) score += 20;
  if (campaign && campaign.toLowerCase().includes("evening")) score += 15;

  // Time-based intent (business hours = high intent)
  const hour = new Date(createdAt).getHours();
  if (hour >= 9 && hour <= 18) score += 25;

  // Final intent classification
  let intent = "Low";
  if (score >= 60) intent = "High";
  else if (score >= 40) intent = "Medium";

  return { score, intent };
}

module.exports = { scoreLead };
