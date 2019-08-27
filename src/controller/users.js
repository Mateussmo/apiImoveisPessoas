const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth");

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    //30 Days
    expiresIn: 2592000
  });
}

module.exports = {
  async store(req, res) {
    let { name, email } = req.body;
    let password = await bcrypt.hash(req.body.password, 10);
    try {
      if (await User.findOne({ where: { email: req.body.email } })) {
        return res.status(400).send({ error: "O usuário já existe!" });
      }
      let newUser = await User.create(
        {
          name,
          email,
          password
        },
        {
          fields: ["name", "email", "password"]
        }
      );
      if (newUser) {
        res.json({
          result: "ok",
          data: newUser,
          token: generateToken({ id: newUser.id })
        });
      } else {
        res.json({
          result: "failed",
          data: {},
          message: "Falha ao inserir Usuário"
        });
      }
    } catch (err) {
      res.json({
        result: "failed",
        data: {},
        message: `Falha ao inserir Usuário :${err}`
      });
    }
  },
  async authenticate(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      return res.status(400).send({ erro: "Usuario não encontrado!" });
    }
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ Error: "Senha Inválida!" });
    }
    res.send({ user, token: generateToken({ id: user.id }) });
  }
};
