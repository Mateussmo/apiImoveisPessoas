const ImmobilesPeoples = require("../models/immobilesPeoples");

module.exports = {
  async store(peoplesID, res, IDnewImmobiles) {
    let immobilesID = IDnewImmobiles;
    try {
      let NewImmobilesPeoples = await ImmobilesPeoples.create(
        {
          immobilesID,
          peoplesID
        },
        {
          fields: ["immobilesID", "peoplesID"]
        }
      );
      if (NewImmobilesPeoples) {
        res.json({
          result: "ok",
          data: NewImmobilesPeoples
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
  }
};
