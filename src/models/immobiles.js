const Sequelize = require("sequelize");
const sequelize = require("../database/database").sequelize;
const Op = require("../database/database").Op;

const Immobiles = sequelize.define(
  "immobiles",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    offerType: {
      type: Sequelize.STRING
    },
    immobileType: {
      type: Sequelize.STRING
    },
    value: {
      type: Sequelize.INTEGER
    },
    numberDormitory: {
      type: Sequelize.INTEGER
    },
    hasGarage: {
      type: Sequelize.BOOLEAN
    },
    city: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },
    street: {
      type: Sequelize.STRING
    },
    houseNumber: {
      type: Sequelize.STRING
    },
    neighborhood: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

module.exports = Immobiles;
