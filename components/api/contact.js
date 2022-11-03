export default function (req, res) {
  console.log("req.body");
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "",
      pass: ""
    },
    secure: true
  });

  console.log("req.body");
}
