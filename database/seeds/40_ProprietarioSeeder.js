'use strict'

/*
|--------------------------------------------------------------------------
| ProprietarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Proprietario = use("App/Models/Proprietario")

class ProprietarioSeeder {
  async run () {
    await Proprietario.createMany([
      {
        "nome":"Eustáquio Rodrigues",
         "cpf":12288493278,
         "rg":407.202,
         "telefone":62999764400,
         "estado_civil":"Casado",
         "corretor_id":1,
        //  "situacaovendedor_id":1
      }
    ])
  }
}

module.exports = ProprietarioSeeder
