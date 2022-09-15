'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class InformacaoLote extends Model {
    static getCamposCadastro(){
        return ["tipo_residência", "tipo_contrato", "taxa_anual","propriedade_id"]
    }
    propriedade(){
        return this.belongsTo("App/Models/Propriedade")
    }
}

module.exports = InformacaoLote
