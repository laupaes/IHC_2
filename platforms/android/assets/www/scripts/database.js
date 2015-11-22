
$data.Entity.extend("Contato", {
    Id: { type: "int", key: true, computed: true },
    Nome: { type: String },
    Telefone: { type: String },
    Favorito: { type: "int" }
});

$data.EntityContext.extend("ihcDatabase", {
    Usuario: { type: $data.EntitySet, elementType: Usuario },
    Contato: { type: $data.EntitySet, elementType: Contato }

});




//Inicio da Dao.
function Dao() {

    //Script de instanciação para criação do banco local
    var context = new ihcDatabase({
        provider: 'sqLite',
        databaseName: 'db'
    });

   
    Dao.prototype.insereOuAlteraContato = function (object, qtdNumero, retorno) {
        context.onReady(function () {
            try {
                object.NSR = 0;

                context.Contato
                 .filter("it.Numero == pnumero", { pnumero: object.Numero })
                 .toArray(function (a) {
                     if (a.length > 0) {

                         var contato = context.Contato.attachOrGet({ Id: object.Id });
                         contato.Id = object.Id;
                         contato.Telefone = object.Telefone;
                         contato.Nome = object.Nome;
                         contato.Favorito = object.Favorito;
                         


                         context.Contato.saveChanges(function () {
                             if (retorno != null) {
                                 retorno(qtdNumero, contato);
                             }
                         });
                     }
                     else {

                         //selecionar max de id
                         context.Contato.add(object);

                         context.Contato.saveChanges(function () {
                             if (retorno != null) {
                                 alert("retorno: " + qtdNumero);
                                 retorno(qtdNumero, object);
                             }
                         });
                     }
                 });

            } catch (ex) {
                console.log("Dao.insereOuAlteraContato: " + ex);
            }
        })
    };

}