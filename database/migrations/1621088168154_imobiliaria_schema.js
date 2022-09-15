'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImobiliariaSchema extends Schema {
  up () {
    this.create('imobiliarias', (table) => {
      table.increments()
      table.string("Nome", 40).notNullable()
      table.string("cnpj", 20)
      table.integer("telefone", 11).notNullable()
      table.string("localidade", 100)
      table.string("uf", 2)
      table.timestamps()
    })
  }

  down () {
    this.drop('imobiliarias')
  }
}

module.exports = ImobiliariaSchema
