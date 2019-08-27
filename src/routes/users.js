const express = require("express");
const routes = express.Router();
const userController = require("../controller/users");

routes.post("/", userController.store);
routes.post("/authenticate", userController.authenticate);

module.exports = routes;
