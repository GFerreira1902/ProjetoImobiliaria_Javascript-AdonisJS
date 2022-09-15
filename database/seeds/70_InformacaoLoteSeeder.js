'use strict'

/*
|--------------------------------------------------------------------------
| InformacaoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const InformacaoLote = use("App/Models/InformacaoLote")

class InformacaoLoteSeeder {
  async run () {
    await InformacaoLote.createMany([
      {
        "tipo_residência": "Residencial",
        "tipo_contrato": "Venda",
        "taxa_anual": 0,
        "propriedade_id":1
      }
    ])
  }
}

module.exports = InformacaoLoteSeeder
