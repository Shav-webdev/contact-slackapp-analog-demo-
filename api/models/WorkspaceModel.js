const { validation } = require("../../utils/constants");
const Sequelize = require("sequelize");
const sequelize = require("../../DB/index");
const User = require("./UserModel")

const {
  workNameMaxLength,
  workNameMinLength,
  workNameRequired,
  subDomainMaxLength,
  subDomainMinLength,
  subDomainRequired
} = validation;

const workspace = sequelize.define("Workspace", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
    unique: true,
  },
  userId: {
    foreignKey: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: { args: false, msg: workNameRequired },
    notEmpty: true,
    validate: {
      min: {
        args: 2,
        msg: workNameMinLength,
      },
      max: {
        args: 30,
        msg: workNameMaxLength,
      },
    },
  },
  subDomain: {
    type: Sequelize.STRING,
    allowNull: { args: false, msg: subDomainRequired },
    notEmpty: true,
    validate: {
      min: {
        args: 2,
        msg: subDomainMinLength,
      },
      max: {
        args: 30,
        msg: subDomainMaxLength,
      },
    },
  },
});

workspace.belongsTo(User, {
  foreignKey: "userId"
})

module.exports = workspace;
