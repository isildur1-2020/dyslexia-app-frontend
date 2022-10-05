const fs = require("fs");
const path = require("path");
const multer = require("multer");
const morgan = require("morgan");
const cors = require("cors");
const moment = require("moment");
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
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, publicPath);
  },
});

var upload = multer({ storage });

app.post("/data", (req, res) => {
  const { userData, videoLink, screenLink } = req.body;
  const { age, bloodType, dateOfBirth, gender, name, nationality } = userData;

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
    AGE: ${age}
    NAME: ${name}
    GENDER: ${gender}
    BLOOD TYPE: ${bloodType}
    NATIONALITY: ${nationality}
    DATE OF BIRTH: ${dateOfBirth}
    LINK CAMERA RECORD ${videoLink}
    LINK SCREEN RECORD ${screenLink}
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
  try {
    const { mimetype, path } = req.file;
    const extension = mimetype.split("/")?.[1];
    const filename = moment().format();
    let currentPath = path?.split("/");
    currentPath.pop();
    currentPath.push(filename);
    currentPath = currentPath.join("/");
    const newPath = `${currentPath}.${extension}`;
    fs.renameSync(path, newPath);
    res.status(200).json({
      err: null,
      URL: `/${filename}.${extension}`,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err,
      URL: null,
    });
  }
});

app.post("/login", (req, res) => {
  try {
    const { username, password } = req.body;
    // Searching email on database
    const isUsernameExists = users.find((user) => user.username === username);
    if (!isUsernameExists) {
      const message = "Email not found :c";
      console.log(message);
      return res.status(200).json({
        message,
        err: true,
        token: null,
        isAuth: false,
      });
    }
    // Searching the password on database
    const isPasswordCorrect = users.find((user) => user.password === password);
    if (!isPasswordCorrect) {
      const message = "Invalid password :c";
      console.log(message);
      return res.status(200).json({
        message,
        err: true,
        token: null,
        isAuth: false,
      });
    }
    // Authentication succesfully
    const message = "Authenticated c:";
    console.log(`User: ${username} -> ${message}`);
    res.status(200).json({
      message,
      err: false,
      token: null,
      isAuth: true,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      token: null,
      isAuth: false,
      message: err?.message,
    });
  }
});

app.listen(app.get("PORT"), () => {
  console.log("Listening on port: ", app.get("PORT"));
});
