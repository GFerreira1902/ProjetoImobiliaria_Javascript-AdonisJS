'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InformacaoLoteSchema extends Schema {
  up () {
    this.create('informacao_lotes', (table) => {
      table.increments()
      table.string("tipo_residência", 20).notNullable()
      table.string("tipo_contrato", 20).notNullable()
      table.integer("taxa_anual")
      table.integer("propriedade_id").references("id").inTable("propriedades").unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('informacao_lotes')
  }
}

module.exports = InformacaoLoteSchema
