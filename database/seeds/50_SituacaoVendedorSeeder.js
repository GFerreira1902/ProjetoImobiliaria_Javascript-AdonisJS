'use strict'

const SituacaoVendedor = require('../../app/Models/SituacaoVendedor')

/*
|--------------------------------------------------------------------------
| SituacaoVendedorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const situacaoVendedor= use("App/Models/SituacaoVendedor")

class SituacaoVendedorSeeder {
  async run () {
    await situacaoVendedor.createMany([
      {
        certidão_negativa:"Cliente em dia com o banco",
        definição:"Aprovado",
        proprietario_id:1
      }
    ])
  }
}

module.exports = SituacaoVendedorSeeder
