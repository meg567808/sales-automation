const nodemailer = require("nodemailer");

async function sendEmail(recipient, summary) {

  console.log("Sending email to:", recipient);   

  const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipient,
    subject: "AI Generated Sales Summary",
    text: summary
  };

  await transporter.sendMail(mailOptions);

  console.log("Email sent successfully");   
}

module.exports = sendEmail;