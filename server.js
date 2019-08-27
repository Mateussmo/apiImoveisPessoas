const express = require("express");
//const requireDir = require("require-dir");
const userRoutes = require("./src/routes/users");
const peopleRoutes = require("./src/routes/peoples");
const immobilesRoutes = require("./src/routes/immobiles");

// Iniciando o app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Iniciando o DB

// Rotas
app.use("/register", userRoutes);
app.use("/pessoas", peopleRoutes);
app.use("/imoveis", immobilesRoutes);

app.listen(3001);
