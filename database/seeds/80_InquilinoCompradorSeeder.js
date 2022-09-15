'use strict'



/*
|--------------------------------------------------------------------------
| InquilinoCompradorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const InquilinoComprador = use("App/Models/InquilinoComprador")

class InquilinoCompradorSeeder {
  async run () {
    await InquilinoComprador.createMany([
      {"nome":"Raimundo Nonato",
       "cpf":11028891712,
       "rg":"2.607.447",
       "telefone":62984560117,
       "profissão":"Mestre de Obras",
       "salário":2700.00,
       "corretor_id":1,
       "propriedade_id":1}
    ])
  }
}

module.exports = InquilinoCompradorSeeder
