'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImobiliariaCorretorSchema extends Schema {
  up () {
    this.create('imobiliaria_corretores', (table) => {
      table.increments()
      table.integer("imobiliaria_id").references("id").inTable("imobiliarias").unsigned().notNullable()
      table.integer("corretor_id").references("id").inTable("corretores").unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('imobiliaria_corretores')
  }
}

module.exports = ImobiliariaCorretorSchema
