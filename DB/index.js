const Sequelize = require("sequelize");

const DB = "contact";
const USERNAME = "root";
const PASSWORD = "123456";

const sequelize = new Sequelize(DB, USERNAME, PASSWORD, {
  host: "locales",
  dialect: "mysql",
});

module.exports = sequelize;
