const Immobiles = require("../models/immobiles");

module.exports = {
  async store(req, res) {
    let {
      title,
      description,
      offerType,
      immobileType,
      value,
      numberDormitory,
      hasGarage,
      city,
      street,
      houseNumber,
      neighborhood,
      state
    } = req.body;
    try {
      let newImmobiles = await Immobiles.create(
        {
          title,
          description,
          offerType,
          immobileType,
          value,
          numberDormitory,
          hasGarage,
          city,
          street,
          houseNumber,
          neighborhood,
          state
        },
        {
          fields: [
            "title",
            "description",
            "offerType",
            "immobileType",
            "value",
            "numberDormitory",
            "hasGarage",
            "city",
            "street",
            "houseNumber",
            "neighborhood",
            "state"
          ]
        }
      );
      if (newImmobiles) {
        res.json({
          result: "ok",
          data: newImmobiles
        });
      } else {
        res.json({
          result: "failed",
          data: {},
          message: "Falha ao Cadastrar Imóvel"
        });
      }
    } catch (err) {
      res.json({
        result: "failed",
        data: {},
        message: `Falha ao Cadastrar Imóvel :${err}`
      });
    }
  },
  async update(req, res) {
    const { id } = req.params;
    let {
      title,
      description,
      offerType,
      immobileType,
      value,
      numberDormitory,
      hasGarage,
      city,
      street,
      houseNumber,
      neighborhood,
      state
    } = req.body;
    try {
      let immobiles = await Immobiles.findAll({
        attributes: [
          "id",
          "title",
          "description",
          "offerType",
          "immobileType",
          "value",
          "numberDormitory",
          "hasGarage",
          "city",
          "street",
          "houseNumber",
          "neighborhood",
          "state"
        ],
        where: {
          id
        }
      });
      if (immobiles.length > 0) {
        immobiles.forEach(async immobile => {
          await immobile.update({
            title: title ? title : immobile.title,
            description: description ? description : immobile.description,
            offerType: offerType ? offerType : immobile.offerType,
            immobileType: immobileType ? immobileType : immobile.immobileType,
            value: value ? value : immobile.value,
            numberDormitory: numberDormitory
              ? numberDormitory
              : immobile.numberDormitory,
            hasGarage: hasGarage ? hasGarage : immobile.hasGarage,
            city: city ? city : immobile.city,
            street: street ? street : immobile.street,
            houseNumber: houseNumber ? houseNumber : immobile.houseNumber,
            neighborhood: neighborhood ? neighborhood : immobile.neighborhood,
            state: state ? state : immobile.state
          });
        });
        res.json({
          result: "ok",
          date: immobiles,
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
      let numberOfDeletedRows = await Immobiles.destroy({
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
      let immobiles = await Immobiles.findAll({
        attributes: [
          "id",
          "title",
          "description",
          "offerType",
          "immobileType",
          "value",
          "numberDormitory",
          "hasGarage",
          "city",
          "street",
          "houseNumber",
          "neighborhood",
          "state"
        ],
        //Ordena pelo titulo
        order: [["title", "ASC"]]
      });
      res.json({
        result: "ok",
        data: immobiles
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
