'use strict'

/*
|--------------------------------------------------------------------------
| CorretorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Corretor = use("App/Models/Corretor")

class CorretorSeeder {
  async run () {
    await Corretor.createMany([
      { 
        Nome:"Carlos Do Amaral", 
        cpf:"02252466723",
        telefone:6240449876,
        email:"corretor1@imob.com"
      }
    ])
  }
}

module.exports = CorretorSeeder
