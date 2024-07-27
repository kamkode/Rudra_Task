const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendResetPasswordEmail = (to, token) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: 'Password Reset',
    text: `To reset your password, please click on this link: http://yourdomain.com/reset-password?token=${token}`
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendResetPasswordEmail };