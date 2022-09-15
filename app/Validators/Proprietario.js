'use strict'

class Proprietario {
  get rules () {
    return {
      // validation rules
      nome:"required | max:40",
      cpf:"required | number | max:11 | min:11",
      rg:"required | max:10",
      telefone:"required | max:14",
      estado_civil:"required | max:15",
      corretor_id:"required | integer"
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Proprietario
