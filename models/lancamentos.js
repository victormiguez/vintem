Lancamentos = new Mongo.Collection('lancamentos');

Lancamentos.attachSchema(new SimpleSchema({
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
  },
  usuarioId: {
    type: String,
    label: "ID do usuário"
  }
}));

Lancamentos.allow({
  insert: function(usuarioId, doc){
    console.log(usuarioId);
    console.log(doc);
    return doc && doc.usuarioId === usuarioId;
  }
})
