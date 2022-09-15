'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Proprietario extends Model {
    static getCamposCadastro(){
        return ["nome", "cpf", "rg", "telefone", "estado_civil","corretor_id","situacaovendedor_id"]
    }
    propriedades(){
        return this.hasMany("App/Models/Propriedade")
    }
    corretores(){
        return this.belongsTo("App/Models/Corretor")
    }
    situacaovendedor(){
        return this.hasMany("App/Models/SituacaoVendedor")
    }
}

module.exports = Proprietario
