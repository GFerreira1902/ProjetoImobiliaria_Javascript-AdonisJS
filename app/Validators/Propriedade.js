'use strict'

class Propriedade {
  get rules () {
    return {
      // validation rules
      titulo_imovel:"required | max:20",
      nome_propriedade:"max:20",
      valor:"required | number",
      cnpj:"max:15",
      logradouro:"required | max:30",
      uf:"required | min:2 | max:2",
      proprietario_id:"required | integer"
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Propriedade
