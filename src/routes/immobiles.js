const express = require("express");
const routes = express.Router();
const immobilesController = require("../controller/immobiles");

routes.post("/", immobilesController.store);

routes.put("/:id", immobilesController.update);

routes.delete("/:id", immobilesController.delete);

routes.get("/", immobilesController.show);

module.exports = routes;
