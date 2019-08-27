const Sequelize = require("sequelize");
const sequelize = require("../database/database").sequelize;
const Op = require("../database/database").Op;
const bcrypt = require("bcryptjs");

const ImmobilesPeoples = sequelize.define(
  "immobilesPeoples",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    immobilesID: {
      type: Sequelize.INTEGER
    },
    peoplesID: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  }
);

module.exports = ImmobilesPeoples;
