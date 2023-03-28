require("dotenv").config;

const nodemailer = require("nodemailer");
function sendEmail(mail_configs) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_EM,
      pass: process.env.MAIL_PW,
    },
  });

  transporter.sendMail(mail_configs, function (error, info) {
    if (error) {
      console.log(error);
      return reject({ message: "An error has occured" });
    }
    return resolve({ message: "Email sent successfully" });
  });
}

const registrationEmail = ({ email }) => {
  // console.log(email);
  const mail_configs = {
    from: process.env.MAIL_EM,
    to: email,
    subject: "Registration Confirmation",
    text: "Registered Successfully",
    html: `<div>
    <p style="font-weight:800; font-size:1.2rem">Welcome to the jobKhoj!!!</p>
      <div style=" font-size:0.8rem margin:0 30px;">
        <p>Now you can apply for jobs that you want to do.</p>
        <p>A dream doesn't become reality through magic; it takes sweat, determination and hard work. ...</p>
        <p>Find jobs, vacancy, career online.</p>
        <p><b>Thank you</b>.</p>
        <p><b><i>jobKhoj</i></b></p>
      </div>
    </div>`,
  };
  sendEmail(mail_configs);
};
const confirmationEmail = ({ email ,jobTitle,companyName}) => {
  // console.log(email);
  const mail_configs = {
    from: process.env.MAIL_EM,
    to: email,
    subject: "Application for Job",
    text: "Job applied succcessfull",
    html: `<div>
    <p style="font-weight:800; font-size:1.2rem">Application for ${jobTitle} </p>
      <div style=" font-size:0.8rem margin:0 30px;">
        <p>Thank you for applying in ${jobTitle} at ${companyName}.</p>
        <p><b>Thank you</b>.</p>
        <p><b><i>jobKhoj</i></b></p>
      </div>
    </div>`,
  };
  sendEmail(mail_configs);
};
const applicantEmail = ({ jobTitle, applicantName }) => {
  const mail_configs = {
    from: process.env.MAIL_EM,
    to: process.env.ADMIN_MAIL,
    subject: "Application for Job",
    text: "Application Details",
    html: `<div>
    <p style="font-weight:800; font-size:1.2rem">Application for ${jobTitle} </p>
      <div style=" font-size:0.8rem margin:0 30px;">
        <p>Applied By: <b>${applicantName}</b></p>
        <p>Applied For: <b>${jobTitle}</b></p>
        <p><b><i>jobKhoj</i></b></p>
      </div>
    </div>`,
  };
  sendEmail(mail_configs);
};

const forgotPasswordEmailToAdmin = ({ email, token }) => {
  const mail_configs = {
    from: process.env.MAIL_EM,
    to: email,
    subject: "Reset Password",
    text: "Application Details",
    html: `<div>
    <p style="font-weight:800; font-size:1.2rem">Reset Password</p>
      <div style=" font-size:0.8rem margin:0 30px;">
       <a href="http://localhost:3000/api/v1/admin/auth/reset-password/${token}">Click here</a>
      </div>
      <p><b>Thank you</b>.</p>
        <p><b><i>jobKhoj</i></b></p>
    </div>`,
  };
  sendEmail(mail_configs);
};

const forgotPasswordEmailToApplicant = ({ email, token }) => {
  const mail_configs = {
    from: process.env.MAIL_EM,
    to: email,
    subject: "Reset Password",
    text: "Application Details",
    html: `<div>
    <p style="font-weight:800; font-size:1.2rem">Reset Password</p>
      <div style=" font-size:0.8rem margin:0 30px;">
       <a href="http://localhost:3000/reset-password/${token}">Click here</a>
      </div>
      <p><b>Thank you</b>.</p>
        <p><b><i>jobKhoj</i></b></p>
    </div>`,
  };
  sendEmail(mail_configs);
};
module.exports = {
  registrationEmail,
  applicantEmail,
  forgotPasswordEmailToAdmin,
  forgotPasswordEmailToApplicant,
  confirmationEmail
};
