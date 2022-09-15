'use strict'

const ImobiliariaCorretor = use("App/Models/ImobiliariaCorretor")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with imobiliariacorretors
 */
class ImobiliariaCorretorController {
  /**
   * Show a list of all imobiliariacorretors.
   * GET imobiliariacorretors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const {page, perPage} = request.all()
    return ImobiliariaCorretor.query().paginate(page, perPage)
  }

  /**
   * Render a form to be used for creating a new imobiliariacorretor.
   * GET imobiliariacorretors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new imobiliariacorretor.
   * POST imobiliariacorretors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = ["imobiliaria_id", "corretor_id"]
    const imobiliariacorretor = request.only(campos)
    return await ImobiliariaCorretor.create(imobiliariacorretor)
  }

  /**
   * Display a single imobiliariacorretor.
   * GET imobiliariacorretors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await ImobiliariaCorretor.query()
                                    .where("id",params.id)
                                    .first()
  }

  /**
   * Render a form to update an existing imobiliariacorretor.
   * GET imobiliariacorretors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update imobiliariacorretor details.
   * PUT or PATCH imobiliariacorretors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const imobiliariacorretor = await ImobiliariaCorretor.findOrFail(params.id)
    const dados = request.only(["imobiliarias_id", "corretor_id"])

    imobiliariacorretor.merge(dados)
    await imobiliariacorretor.save()
    return imobiliariacorretor
  }

  /**
   * Delete a imobiliariacorretor with id.
   * DELETE imobiliariacorretors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const imobcorret = await ImobiliariaCorretor.findOrFail(params.id)
    
    const destruir = await imobcorret.delete()

    if (destruir == true){
      return "Dev Maldoso, fui desintegrado com sucesso!!!"
    }
  
    
  } 
}

module.exports = ImobiliariaCorretorController
