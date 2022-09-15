'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SituacaoVendedorSchema extends Schema {
  up () {
    this.create("situacao_vendedores", (table) => {
      table.increments()
      table.string("certidão_negativa", 150).notNullable()
      table.string("definição", 12).notNullable()
      table.integer("proprietario_id").references("id").inTable("proprietarios").unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop("situacao_vendedores")
  }
}

module.exports = SituacaoVendedorSchema
