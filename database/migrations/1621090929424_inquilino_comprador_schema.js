'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InquilinoCompradorSchema extends Schema {
  up () {
    this.create('inquilino_compradores', (table) => {
      table.increments()
      table.string("nome", 40).notNullable()
      table.string("cpf", 11).notNullable()
      table.string("rg", 10).notNullable()
      table.integer("telefone", 11).notNullable()
      table.string("profissão", 20).notNullable()
      table.decimal("salário").notNullable()
      table.integer("corretor_id").references("id").inTable("corretores").unsigned().notNullable()
      table.integer("propriedade_id").references("id").inTable("propriedades").unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('inquilino_compradores')
  }
}

module.exports = InquilinoCompradorSchema
