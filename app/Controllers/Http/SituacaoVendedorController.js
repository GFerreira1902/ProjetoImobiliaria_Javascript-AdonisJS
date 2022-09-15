'use strict'

const SituacaoVendedor = use("App/Models/SituacaoVendedor")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with situacaovendedors
 */
class SituacaoVendedorController {
  /**
   * Show a list of all situacaovendedors.
   * GET situacaovendedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return SituacaoVendedor.query().fetch()
  }

  /**
   * Render a form to be used for creating a new situacaovendedor.
   * GET situacaovendedors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new situacaovendedor.
   * POST situacaovendedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = ["certidão_negativa", "definição","proprietario_id"]

    const situacaovendedor = request.only(campos)
    
    const crie = SituacaoVendedor.create(situacaovendedor)

    const def = situacaovendedor.definição

    if (def == "Reprovado"){
      // const obs = await crie.delete()

      return "Proprietário com Pendências, impossível cadastrar!!!"
    }
    
    return crie
    
  }  
  /**
   * Display a single situacaovendedor.
   * GET situacaovendedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await SituacaoVendedor.query()
                                 .with("proprietario")
                                 .where("id",params.id)
                                 .first()
  }

  /**
   * Render a form to update an existing situacaovendedor.
   * GET situacaovendedors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update situacaovendedor details.
   * PUT or PATCH situacaovendedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const sitvendedor = await SituacaoVendedor.findOrFail(params.id)
    const dados = request.only(["certidão_negativa", "definição","proprietario_id"])

    sitvendedor.merge(dados)
    await sitvendedor.save()
    return sitvendedor
  }

  /**
   * Delete a situacaovendedor with id.
   * DELETE situacaovendedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const situacaovendedor = await SituacaoVendedor.findOrFail(params.id)
    
    const destruir = await situacaovendedor.delete()

    if (destruir == true){
      return "Dev Maldoso, fui desintegrado com sucesso!!!"
    }
  }
}

module.exports = SituacaoVendedorController
