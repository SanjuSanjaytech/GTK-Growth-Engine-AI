const notifyAdmin = lead => {
  console.log(
    `📲 New Lead Alert:
    Name: ${lead.name}
    Phone: ${lead.phone}
    Vertical: ${lead.vertical}
    Score: ${lead.score}`
  );
};

module.exports = { notifyAdmin };
