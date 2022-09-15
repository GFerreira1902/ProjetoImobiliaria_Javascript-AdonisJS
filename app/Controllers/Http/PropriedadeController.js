'use strict'

const Propriedade = use("App/Models/Propriedade")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with propriedades
 */
class PropriedadeController {
  /**
   * Show a list of all propriedades.
   * GET propriedades
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Propriedade.query().fetch()
  }
  /**
   * Render a form to be used for creating a new propriedade.
   * GET propriedades/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new propriedade.
   * POST propriedades
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = ["titulo_imovel", "nome_propriedade", "valor", "cnpj", "logradouro","uf", "informacao_lote_id", "proprietario_id"]
    const propriedade = request.only(campos)
    return await Propriedade.create(propriedade)
  }

  /**
   * Display a single propriedade.
   * GET propriedades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Propriedade.query()
                            .with("proprietario")
                            .with("informacaolote")
                            .where("id",params.id)
                            .first()
  }

  /**
   * Render a form to update an existing propriedade.
   * GET propriedades/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update propriedade details.
   * PUT or PATCH propriedades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const propriedade = await Propriedade.findOrFail(params.id)
    const dados  = request.only(["titulo_imovel", "nome_propriedade", "valor", "cnpj", "logradouro", "uf",/* "informacao_lote_id"*/ "proprietario_id"])

    propriedade.merge(dados)
    await propriedade.save()
    return propriedade
  }

  /**
   * Delete a propriedade with id.
   * DELETE propriedades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const propriedade = await Propriedade.findOrFail(params.id)
    
    const destruir = await propriedade.delete()

    if (destruir == true){
      return "Dev Maldoso, fui desintegrado com sucesso!!!"
    }
  }
}

module.exports = PropriedadeController
