'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProprietarioSchema extends Schema {
  up () {
    this.create('proprietarios', (table) => {
      table.increments()
      table.string("nome", 40).notNullable()
      table.biginteger("cpf", 11).notNullable()
      table.string("rg", 10).notNullable()
      table.integer("telefone", 14).notNullable()
      table.string("estado_civil", 15).notNullable()
      table.integer("corretor_id").references("id").inTable("corretores").unsigned().notNullable()
      // table.integer("situacaovendedor_id").references("id").inTable("situacao_vendedores").unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('proprietarios')
  }
}

module.exports = ProprietarioSchema
