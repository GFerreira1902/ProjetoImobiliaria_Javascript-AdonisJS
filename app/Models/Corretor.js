'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Corretor extends Model {
    static get table(){
        return "corretores"
    }
    static getCamposCadastro(){
        return ["Nome", "cpf", "telefone", "email"]
    }
    imobiliarias(){
        return this.belongsToMany("App/Models/Imobiliaria").pivotTable("imobiliaria_corretores")
    }
    proprietario(){
        return this.hasMany("App/Models/Proprietario")
    }
    inquilinocomprador(){
        return this.hasMany("App/Models/InquilinoComprador")
    }
}

module.exports = Corretor
