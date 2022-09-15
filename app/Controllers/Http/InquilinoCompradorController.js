'use strict'

const InquilinoComprador = use("App/Models/InquilinoComprador")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with inquilinocompradors
 */
class InquilinoCompradorController {
  /**
   * Show a list of all inquilinocompradors.
   * GET inquilinocompradors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return InquilinoComprador.query().fetch()
  }

  /**
   * Render a form to be used for creating a new inquilinocomprador.
   * GET inquilinocompradors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new inquilinocomprador.
   * POST inquilinocompradors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = ["nome", "cpf", "rg", "telefone", "profissão", "salário", "corretor_id","propriedade_id"]
    const inquilinocomprador = request.only(campos)
    return await InquilinoComprador.create(inquilinocomprador)
  }

  /**
   * Display a single inquilinocomprador.
   * GET inquilinocompradors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await InquilinoComprador.query()
                                   .with("corretor")
                                   .where("id",params.id)
                                   .first()
  }

  /**
   * Render a form to update an existing inquilinocomprador.
   * GET inquilinocompradors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update inquilinocomprador details.
   * PUT or PATCH inquilinocompradors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const inquilinocomprador = await InquilinoComprador.findOrFail(params.id)
    const dados = request.only(["nome", "cpf", "rg", "telefone", "profissão", "salário", "corretor_id","propriedadede_id"])

    inquilinocomprador.merge(dados)
    await inquilinocomprador.save()
    return inquilinocomprador
  }

  /**
   * Delete a inquilinocomprador with id.
   * DELETE inquilinocompradors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const inquilinocomp = await InquilinoComprador.findOrFail(params.id)
    
    const destruir = await inquilinocomp.delete()

    if (destruir == true){
      return "Dev Maldoso, fui desintegrado com sucesso!!!"
    }
  
  }
}

module.exports = InquilinoCompradorController
