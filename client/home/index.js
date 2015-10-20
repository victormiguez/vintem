Template.body.helpers({
  lancamentos: function () {
    return Lancamentos.find({});
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
