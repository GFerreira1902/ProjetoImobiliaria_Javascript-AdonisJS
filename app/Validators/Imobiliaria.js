'use strict'

class Imobiliaria {
  get rules () {
    return {
      // validation rules
      Nome:"required | max:40",
      cpnj:"max:20",
      telefone:"required | min:11 | max:11",
      localidade:"max:100",
      uf:"min:2 | max:2"  
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Imobiliaria
