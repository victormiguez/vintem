if (Meteor.user())
  Meteor.subscribe('lancamentosPorUsuario', Meteor.userId());

Template.body.helpers({
  lancamentos: function () {
    if (Meteor.user())
      return Lancamentos.find({usuarioId: Meteor.userId()});
  }
})

var lancamentoHooks = {
  before: {
    insert: function(doc) {
      if(Meteor.userId()){
        doc.usuarioId = Meteor.userId();
      }

      console.log(doc);
      return doc;
    }
  }
}

AutoForm.addHooks('inserirLancamento', lancamentoHooks);
