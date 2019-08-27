const express = require("express");
const routes = express.Router();
const peopleController = require("../controller/peoples");

routes.post("/", peopleController.store);
routes.delete("/:id", peopleController.delete);
routes.get("/", peopleController.show);
routes.put("/:id", peopleController.update);

module.exports = routes;
