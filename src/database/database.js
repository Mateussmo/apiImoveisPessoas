const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "nodeapi", // Nome do Database
  "mateus", // Username
  "1234", //password
  {
    host: "localhost",
    dialect: "postgres"
  },
  {
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    }
  }
);
const Op = Sequelize.Op;
module.exports = {
  sequelize,
  Op
};
