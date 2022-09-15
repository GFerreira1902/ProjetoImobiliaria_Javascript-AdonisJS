'use strict'

class InquilinoComprador {
  get rules () {
    return {
      // validation rules
      nome:'required | max:40',
      cpf:"required | min:11 | max:11",
      rg:"required | max:10",
      telefone:"required | integer | min:11 | max:11",
      profissão:"required | max:20",
      salário:"required | number",
      corretor_id:"required | integer",
      propriedade_id:"required | integer"
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = InquilinoComprador
