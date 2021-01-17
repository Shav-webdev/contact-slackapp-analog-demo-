const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Sequelize = require("sequelize");
const User = require("../models/UserModel");
const config = require("config");
const { messages, types } = require("../../utils/constants");
const nodemailer = require("nodemailer");
const sendGrid = require("nodemailer-sendgrid-transport");
const { registerEmail } = require("../../emails/email.register");

const transporter = nodemailer.createTransport(
  sendGrid({
    auth: { api_key: config.emailSendGridAPI },
  })
);

const saltRounds = 10;
const { validationError } = types;
const {
  errorMessage,
  errorAuthFailed,
  errorAlreadyExists,
  successAuthMessage,
  successUserCreated,
} = messages;

exports.authLogin = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email.toLowerCase(),
    });
    if (!user) {
      res.status(401).send({
        message: errorAuthFailed,
      });
    }
    const password = req.body.password;

    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        console.log("pass err message", err.message);
      }
      if (!result) {
        res.status(401).send({
          message: errorAuthFailed,
        });
      } else {
        /*send token*/
        req.session.user = user;
        req.session.isAuthenticated = true;
        const token = jwt.sign(
          {
            email: user.email,
            userId: user.id,
          },
          config.get("jwt_key"),
          {
            expiresIn: Number(config.get("jwt_expiresIn")),
          }
        );
        const auth = {
          userId: user.id,
          token: `Bearer ${token}`,
          expiresIn: config.get("jwt_expiresIn"),
        };
        res.status(200).send({
          auth,
          message: successAuthMessage,
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
};

exports.authLogout = async (req, res) => {
  req.session.destroy(() => {
    res.status(200).send({
      message: "Logout success!",
    });
  });
};

exports.authRegister = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await User.findOne({
      where: {
        email: email.toLowerCase(),
      },
    });
    if (!user) {
      bcrypt.hash(password, saltRounds, async function (err, hash) {
        if (err) {
          console.log("err", err);
          return res.status(404).send({
            message: errorMessage,
          });
        }
        const user = await User.create({
          fullName,
          email: email.toLowerCase(),
          password: hash,
        }).catch(Sequelize.ValidationError, function (err) {
          console.log("validation error", err);
        });

        res.status(201).send({
          message: successUserCreated,
        });
        await transporter.sendMail(registerEmail(email, fullName));
      });
    } else {
      res.status(409).send({
        message: errorAlreadyExists,
      });
    }
  } catch (e) {
    console.log(e);
    console.log(e.message);
    res.status(500).send({
      message: errorServerMessage,
    });
  }
};
