'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CorretorSchema extends Schema {
  up () {
    this.create('corretores', (table) => {
      table.increments()
      table.string("Nome", 40).notNullable()
      table.biginteger("cpf", 11)
      table.integer("telefone").notNullable()
      table.string("email", 40)
      table.timestamps()
    })
  }

  down () {
    this.drop('corretores')
  }
}

module.exports = CorretorSchema
