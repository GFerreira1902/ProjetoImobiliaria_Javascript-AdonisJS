'use strict'

/*
|--------------------------------------------------------------------------
| ImobiliariaCorretorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const ImobiliariaCorretor = use("App/Models/ImobiliariaCorretor")

class ImobiliariaCorretorSeeder {
  async run () {
    await ImobiliariaCorretor.createMany([
      {"imobiliaria_id": "1",
      "corretor_id": "1"}
    ])

  }
}

module.exports = ImobiliariaCorretorSeeder
