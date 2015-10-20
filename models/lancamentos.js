Lancamentos = new Mongo.Collection('lancamentos');

var Schemas = {};

Schemas.Lancamento = new SimpleSchema({
  data: {
    type: Date,
    label: "Data"
  },
  valor: {
    type: String,
    label: "Valor"
  },
  descricao: {
    type: String,
    label: "Descricao"
  }
});

Lancamentos.attachSchema(Schemas.Lancamento);