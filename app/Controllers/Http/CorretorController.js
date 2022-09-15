'use strict'

const Corretor = use("App/Models/Corretor")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with corretors
 */
class CorretorController {
  /**
   * Show a list of all corretors.
   * GET corretors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    // return Corretor.query().fetch()
    const {page, perPage} = request.all()
    return Corretor.query().paginate(page, perPage)
    
  }

  /**
   * Render a form to be used for creating a new corretor.
   * GET corretors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {

  }

  /**
   * Create/save a new corretor.
   * POST corretors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = ["Nome", "cpf", "telefone", "email"]

    const corretor = request.only(campos)
    return await Corretor.create(corretor)

  }

  /**
   * Display a single corretor.
   * GET corretors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Corretor.query()
                         .with("imobiliarias")
                         .with("inquilinocomprador")
                         .with("proprietario")
                         .where("id",params.id)
                         .first()
  }

  /**
   * Render a form to update an existing corretor.
   * GET corretors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update corretor details.
   * PUT or PATCH corretors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const corretor = await Corretor.findOrFail(params.id)
    const dados = request.only(["Nome", "cpf", "telefone", "email"])

    corretor.merge(dados)
    await corretor.save()
    return corretor 
  }

  /**
   * Delete a corretor with id.
   * DELETE corretors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const corretores = await Corretor.findOrFail(params.id)
    
    const destruir = await corretores.delete()

    if (destruir == true){
      return "Dev Maldoso, fui desintegrado com sucesso!!!"
    }
  

  }
}

module.exports = CorretorController
