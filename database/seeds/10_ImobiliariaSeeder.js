'use strict'

/*
|--------------------------------------------------------------------------
| ImobiliariaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Imobiliaria = use("App/Models/Imobiliaria")

class ImobiliariaSeeder {
  async run () {
    await Imobiliaria.createMany([
        {"Nome": "Nobres Imobiliária",
        "cnpj": "12.456.222/1313-01",
        "telefone": 6240028922,
        "localidade":"Avenida São Franciso - Centro",
        "uf":"GO"
        }
    ])
  }
}

module.exports = ImobiliariaSeeder
