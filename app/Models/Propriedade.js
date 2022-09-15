'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Propriedade extends Model {
    static getCamposCadastro(){
        return ["titulo_imovel",
                 "nome_propriedade",
                 "valor",
                 "cnpj",
                 "logradouro",
                 "uf",
                 "proprietario_id"
                ]
    }
    informacaolote(){
        return this.hasMany("App/Models/InformacaoLote")
    }
    proprietario(){
        return this.belongsTo("App/Models/Proprietario")
    }
    inquilinocomprador(){
        return this.belongsTo("App/Models/InquilinoComprador")
    }
}

module.exports = Propriedade
