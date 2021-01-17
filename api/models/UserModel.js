const { validation } = require("../../utils/constants");
const Sequelize = require("sequelize");
const sequelize = require("../../DB/index");


const {
  nameMaxLength,
  nameMinLength,
  nameRequired,
  passwordMinLength,
  passwordMaxLength,
  passwordRequired,
  emailRegexp,
} = validation;

const user = sequelize.define("User", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
    unique: true,
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: { args: false, msg: nameRequired },
    notEmpty: true,
    validate: {
      min: {
        args: 2,
        msg: nameMinLength,
      },
      max: {
        args: 50,
        msg: nameMaxLength,
      },
    },
  },
  email: {
    type: Sequelize.STRING,
    required: true,
    unique: true,
    validate: {
      isEmail: {
        args: true,
        msg: emailRegexp,
      },
    },
  },
  password: {
    type: Sequelize.STRING,
    min: { args: 8, msg: passwordMinLength },
    max: { args: 32, msg: passwordMaxLength },
    allowNull: { args: false, msg: passwordRequired },
    notEmpty: { args: true, msg: passwordRequired },
  },
  avatar: {
    type: Sequelize.STRING,
    defaultValue:
      "https://res.cloudinary.com/do4elvogx/image/upload/v1585041498/defaultImages/avatar_wivmdv.png",
  },
});

module.exports = user;
