'use strict'

class Corretor {
  get rules () {
    return {
      // validation rules
      Nome: "required | max:40",
      cpf:"number | min:11 | max:11",
      telefone:"required | integer",
      email:"max:40"
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Corretor
