const express = require("express");
const routes = express.Router();
const peopleController = require("../controller/peoples");
const authMiddleware = require("../middlewares/auth");

routes.post("/", authMiddleware, peopleController.store);
routes.delete("/:id", authMiddleware, peopleController.delete);
routes.get("/", peopleController.show);
routes.put("/:id", authMiddleware, peopleController.update);

module.exports = routes;
