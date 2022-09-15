'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PropriedadeSchema extends Schema {
  up () {
    this.create('propriedades', (table) => {
      table.increments()
      table.string("titulo_imovel", 20).notNullable()
      table.string("nome_propriedade", 20)
      table.decimal("valor").notNullable()
      table.string("cnpj", 15)
      table.string("logradouro", 60).notNullable()
      table.string("uf", 2).notNullable()
      table.integer("proprietario_id").references("id").inTable("proprietarios").unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('propriedades')
  }
}

module.exports = PropriedadeSchema
