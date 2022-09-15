'use strict'

const Proprietario = use("App/Models/Proprietario")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with proprietarios
 */
class ProprietarioController {
  /**
   * Show a list of all proprietarios.
   * GET proprietarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Proprietario.query().fetch()
  }

  /**
   * Render a form to be used for creating a new proprietario.
   * GET proprietarios/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new proprietario.
   * POST proprietarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = ["nome", "cpf", "rg", "telefone", "estado_civil","corretor_id"]
    const proprietario = request.only(campos)
    return await Proprietario.create(proprietario)
  
  }

  /**
   * Display a single proprietario.
   * GET proprietarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Proprietario.query()
                      .with("propriedades")
                      .with("situacaovendedor")
                      .with("corretores")
                      .where("id",params.id)
                      .first()
  }

  /**
   * Render a form to update an existing proprietario.
   * GET proprietarios/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update proprietario details.
   * PUT or PATCH proprietarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const proprietario = await  Proprietario.findOrFail(params.id)
    const dados = request.only(["nome", "cpf", "rg", "telefone", "estado_civil","corretor_id"/*,"situacaovendedor_id"*/])

    proprietario.merge(dados)
    await proprietario.save()
    return proprietario
  }

  /**
   * Delete a proprietario with id.
   * DELETE proprietarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const proprietario = await Proprietario.findOrFail(params.id)
    
    const destruir = await proprietario.delete()

    if (destruir == true){
      return "Dev Maldoso, fui desintegrado com sucesso!!!"
    }
  }
}

module.exports = ProprietarioController
