'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Imobiliaria extends Model {
    static getCamposCadastro(){
        return  ["Nome", "cnpj", "telefone", "localidade", "uf"]
    }
    corretores(){
        return this.belongsToMany("App/Models/Corretor").pivotTable("imobiliaria_corretores")
    }
}

module.exports = Imobiliaria
