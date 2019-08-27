const People = require("../models/people");

module.exports = {
  async store(req, res) {
    let {
      name,
      lastname,
      cpf,
      birthday,
      phone,
      street,
      state,
      city
    } = req.body;
    try {
      let newPeople = await People.create(
        {
          name,
          lastname,
          cpf,
          birthday,
          phone,
          street,
          state,
          city
        },
        {
          fields: [
            "name",
            "lastname",
            "cpf",
            "birthday",
            "phone",
            "street",
            "state",
            "city"
          ]
        }
      );
      if (newPeople) {
        res.json({
          result: "ok",
          data: newPeople
        });
      } else {
        res.json({
          result: "failed",
          data: {},
          message: "Falha ao Cadastrar Pessoa"
        });
      }
    } catch (err) {
      res.json({
        result: "failed",
        data: {},
        message: `Falha ao Cadastrar Pessoa :${err}`
      });
    }
  },
  async update(req, res) {
    const { id } = req.params;
    let {
      name,
      lastname,
      cpf,
      birthday,
      phone,
      street,
      state,
      city
    } = req.body;
    try {
      let peoples = await People.findAll({
        attributes: [
          "id",
          "name",
          "lastname",
          "cpf",
          "birthday",
          "phone",
          "street",
          "state",
          "city"
        ],
        where: {
          id
        }
      });
      if (peoples.length > 0) {
        peoples.forEach(async people => {
          await people.update({
            name: name ? name : people.name,
            lastname: lastname ? lastname : people.lastname,
            cpf: cpf ? cpf : people.cpf,
            birthday: birthday ? birthday : people.birthday,
            phone: phone ? phone : people.phone,
            street: street ? street : people.street,
            state: state ? state : people.state,
            city: city ? city : people.city
          });
        });
        res.json({
          result: "ok",
          date: peoples,
          message: "Registro Atualizado!"
        });
      } else {
        res.json({
          result: "Falha!",
          date: {},
          message: `Registro não Atualizado !`
        });
      }
    } catch (err) {
      res.json({
        result: "Falha!",
        date: {},
        message: `Registro não Atualizado: Error: ${err} !`
      });
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    try {
      let numberOfDeletedRows = await People.destroy({
        where: {
          id
        }
      });
      res.json({
        result: "ok",
        message: "Registro deletado com sucesso!",
        count: numberOfDeletedRows
      });
    } catch (err) {
      res.json({
        result: "Falha",
        message: `Registro não deletado. Erro: ${err}`
      });
    }
  },
  async show(req, res) {
    try {
      let people = await People.findAll({
        attributes: [
          "id",
          "name",
          "lastname",
          "cpf",
          "birthday",
          "phone",
          "street",
          "state",
          "city"
        ],
        // Ordena pelo nome
        order: [["name", "ASC"]]
      });
      res.json({
        result: "ok",
        data: people
      });
    } catch (err) {
      res.json({
        result: "Falhou!",
        data: [],
        message: `Error: ${err}`
      });
    }
  }
};
