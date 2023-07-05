const nodemailer = require("nodemailer");
require("dotenv").config();

const { EMAIL_PASSWORD, EMAIL } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465, // 465 - захищений порт, ще є 25 і 2525, вони незахищені
  secure: true, /// чи треба шифрувати
  auth: {
    user: EMAIL, // поштова скринька відправника
    pass: EMAIL_PASSWORD, // пароль від поштової скриньки відправника
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: EMAIL };
  await transport.sendMail(email);
  console.log("Email send success");
  return true;
};

module.exports = sendEmail;
