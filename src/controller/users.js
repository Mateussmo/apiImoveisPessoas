const User = require("../models/users");

module.exports = {
  async store(req, res) {
    let { name, email, password } = req.body;
    try {
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
          data: newUser
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
  }
};
