'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SituacaoVendedor extends Model {
    static get table(){
        return "situacao_vendedores"
    }
    static getCamposCadastro(){
        return ["certidão_negativa", "definição"]
    }
    proprietario(){
        return this.belongsTo("App/Models/Proprietario")
    }
}

module.exports = SituacaoVendedor
