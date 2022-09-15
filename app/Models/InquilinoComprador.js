'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class InquilinoComprador extends Model {
    static get table(){
        return "inquilino_compradores"
    }
    static getCamposCadastro(){
        return ["nome", "cpf", "rg", "telefone", "profissão", "salário", "corretor_id","propriedade_id"]
    }
    propriedade(){
        return this.hasMany("App/Models/Propriedade")
    }
    corretor(){
        return this.belongsTo("App/Models/Corretor")
    }
}

module.exports = InquilinoComprador
