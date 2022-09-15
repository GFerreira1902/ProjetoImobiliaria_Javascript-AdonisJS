'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ImobiliariaCorretor extends Model {
    static get table(){
        return "imobiliaria_corretores"
    }
    static getCamposCadastro(){
        return ["imobiliarias_id", "corretores_id"]
    }
    
}

module.exports = ImobiliariaCorretor
