'use strict'

const InformacaoLote = use("App/Models/InformacaoLote")


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with informacaolotes
 */
class InformacaoLoteController {
  /**
   * Show a list of all informacaolotes.
   * GET informacaolotes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const {page, perPage} = request.all()
    return InformacaoLote.query().paginate(page, perPage)
  }

  /**
   * Render a form to be used for creating a new informacaolote.
   * GET informacaolotes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new informacaolote.
   * POST informacaolotes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = ["tipo_residência", "tipo_contrato", "taxa_anual","propriedade_id"]
    const informacaolote = request.only(campos)
    return await InformacaoLote.create(informacaolote)
  }

  /**
   * Display a single informacaolote.
   * GET informacaolotes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await InformacaoLote.query()
                               .with("propriedade")
                               .where("id",params.id)
                               .first()
  }

  /**
   * Render a form to update an existing informacaolote.
   * GET informacaolotes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update informacaolote details.
   * PUT or PATCH informacaolotes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const infoLote = await InformacaoLote.findOrFail(params.id)
    const dados  = request.only(["tipo_residência", "tipo_contrato", "taxa_anual","propriedade_id"])

    infoLote.merge(dados)
    infoLote.save()
    return infoLote

  }

  /**
   * Delete a informacaolote with id.
   * DELETE informacaolotes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const infolote = await InformacaoLote.findOrFail(params.id)
    
    const destruir = await infolote.delete()

    if (destruir == true){
      return "Dev Maldoso, fui desintegrado com sucesso!!!"
    }
  
  }
}

module.exports = InformacaoLoteController
