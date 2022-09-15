'use strict'

/*
|--------------------------------------------------------------------------
| PropriedadeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Propriedade = use("App/Models/Propriedade")

class PropriedadeSeeder {
  async run () {
    await Propriedade.createMany([
      {
      "titulo_imovel": "1234/2222-7",
      "nome_propriedade": "Campo Divino",
      "valor": 403.200,
      "logradouro": "Setor De Mansões",
      "uf": "GO",
      "proprietario_id": 1
      }
    ])
  }
}

module.exports = PropriedadeSeeder
