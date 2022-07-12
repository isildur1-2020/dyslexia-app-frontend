const fs = require("fs");
const path = require("path");
const multer = require("multer");
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const nodemailer = require("nodemailer");
const { users } = require("./src/database/users");
const { config } = require("dotenv");
config();

const app = express();
// SETTINGS
app.set("PORT", process.env.PORT || 62345);
const publicPath = path.join(__dirname, "public");
// MIDDLEWARES
app.use(express.json());
app.use(cors());
// app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));

const upload = multer({
  dest: publicPath,
});

app.post("/data", (req, res) => {
  const { userData, videoLink, screenLink } = req.body;
  const { age, bloodType, dateOfBirth, gender, name, nationality } = userData;
  console.log(userData, videoLink, screenLink);
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_DESTINY,
    subject: "Dyslexia App",
    text: `
      LINK CAMERA RECORD ${videoLink}
      LINK SCREEN RECORD ${screenLink}
      NAME: ${name}
      AGE: ${age}
      GENDER: ${gender}
      DATE OF BIRTH: ${dateOfBirth}
      BLOOD TYPE: ${bloodType}
      NATIONALITY: ${nationality}
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send(500, err.message);
    } else {
      console.log("Email sent");
      res.status(200).jsonp(req.body);
    }
  });
});

app.post("/upload", upload.single("record"), (req, res) => {
  const { mimetype, path, filename } = req.file;
  console.log(req.file);
  const type = mimetype.split("/")[1];
  const newPath = `${path}.${type}`;
  fs.renameSync(path, newPath);
  res.status(200).json({
    URL: `/${filename}.${type}`,
  });
});

app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;
    const isEmailExist = users.find((user) => user.email === email);
    if (!isEmailExist)
      return res.status(200).json({
        isAuth: false,
        error: "Email inexistente",
      });
    const isPasswordCorrect = users.find((user) => user.password === password);
    if (!isPasswordCorrect)
      return res.status(200).json({
        isAuth: false,
        error: "Contraseña incorrecta",
      });
    res.status(200).json({
      isAuth: true,
      error: false,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      isAuth: false,
      error: true,
    });
  }
});

app.listen(app.get("PORT"), () => {
  console.log("Listening on localhost:", app.get("PORT"));
});
