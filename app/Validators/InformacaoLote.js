'use strict'

class InformacaoLote {
  get rules () {
    return {
      // validation rules
      tipo_residência:"required | max:20",
      tipo_contrato:'required | max:20',
      taxa_anual:"integer",
      propriedade_id:"required | integer"
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = InformacaoLote
