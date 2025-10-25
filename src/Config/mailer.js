import { config } from "dotenv";
import nodemailer from "nodemailer";
config();

const transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS, 
  },
});

export const sendMail=async()=>{
  try {
    const info = await transporter.sendMail({
      from: `"ReceiptHub" <${process.env.MAIL_USER}>`,
      to: "daymondodari68@gmail.com",
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
    });

    console.log("Message sent:", info.messageId);
  } catch (err) {
    console.error("Error sending email:", err);
  }
}
