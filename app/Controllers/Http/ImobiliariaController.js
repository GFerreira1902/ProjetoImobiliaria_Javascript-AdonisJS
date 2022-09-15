'use strict'

const Imobiliaria = use("App/Models/Imobiliaria")


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with imobiliarias
 */
class ImobiliariaController {
  /**
   * Show a list of all imobiliarias.
   * GET imobiliarias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const {page, perPage} = request.all()
    return Imobiliaria.query().paginate(page, perPage)
  }

  /**
   * Render a form to be used for creating a new imobiliaria.
   * GET imobiliarias/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new imobiliaria.
   * POST imobiliarias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = ["Nome", "cnpj", "telefone", "localidade", "uf"]
    const imobiliaria = request.only(campos)
    return await Imobiliaria.create(imobiliaria)
  }

  /**
   * Display a single imobiliaria.
   * GET imobiliarias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Imobiliaria.query()
                            .with("corretores")
                            .where("id",params.id)
                            .first()
  }

  /**
   * Render a form to update an existing imobiliaria.
   * GET imobiliarias/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update imobiliaria details.
   * PUT or PATCH imobiliarias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const imobiliaria =await Imobiliaria.findOrFail(params.id)
    const dados = request.only(["Nome", "cnpj", "telefone", "localidade", "uf"])

    imobiliaria.merge(dados)
    await imobiliaria.save()
    return imobiliaria
  }

  /**
   * Delete a imobiliaria with id.
   * DELETE imobiliarias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const imob = await Imobiliaria.findOrFail(params.id)
    
    const destruir = await imob.delete()

    if (destruir == true){
      return "Dev Maldoso, fui desintegrado com sucesso!!!"
    }
  
  }
}

module.exports = ImobiliariaController
