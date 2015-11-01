Meteor.publish('lancamentosPorUsuario', function (usuarioId) {
  return Lancamentos.find({usuarioId: usuarioId});
});