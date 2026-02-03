// This is only a mock WhatsApp notification service
// In production, this can be replaced with Twilio or WhatsApp Cloud API

function sendWhatsAppNotification(lead) {
  console.log(`
📲 New Lead Alert:
Name: ${lead.name}
Phone: ${lead.phone}
Vertical: ${lead.vertical}
Score: ${lead.score}
`);
}

module.exports = { sendWhatsAppNotification };
