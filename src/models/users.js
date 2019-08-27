const Sequelize = require("sequelize");
const sequelize = require("../database/database").sequelize;
const Op = require("../database/database").Op;

const Users = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

module.exports = Users;
