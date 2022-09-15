'use strict'

class SituacaoVendedor {
  get rules () {
    return {
      // validation rules
      certidão_negativa:"required | max:150",
      definição:"required | max:12",
      proprietario_id: "required | integer"
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = SituacaoVendedor
