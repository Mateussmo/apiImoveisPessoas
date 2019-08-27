const express = require("express");
const routes = express.Router();
const immobilesController = require("../controller/immobiles");
const authMiddleware = require("../middlewares/auth");

routes.post("/", authMiddleware, immobilesController.store);

routes.put("/:id", authMiddleware, immobilesController.update);

routes.delete("/:id", authMiddleware, immobilesController.delete);

routes.get("/", immobilesController.show);

module.exports = routes;
