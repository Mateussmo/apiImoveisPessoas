const express = require("express");
const routes = express.Router();
const userController = require("../controller/users");

routes.post("/", userController.store);

module.exports = routes;
