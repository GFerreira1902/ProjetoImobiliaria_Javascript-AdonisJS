'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.post("token", "UserController.token")
Route.resource("users", "UserController").apiOnly()

Route.group(()=>{
    
    Route.resource("/Imobiliarias", "ImobiliariaController").apiOnly().validator(new Map([
      [["store", "update"],"Imobiliaria"]]))

    Route.resource("/Corretores", "CorretorController").apiOnly().validator(new Map([
      [["store", "update"],"Corretor"]]))


    Route.resource("/Imobiliariascorretores", "ImobiliariaCorretorController").apiOnly()


    Route.resource("/Informacaolotes", "InformacaoLoteController").apiOnly().validator(new Map([
      [["store", "update"],"InformacaoLote"]]))


    Route.resource("/Inquilinoscompradores", "InquilinoCompradorController").apiOnly().validator(new Map([
      [["store", "update"],"InquilinoComprador"]]))


    Route.resource("/Propriedades", "PropriedadeController").apiOnly().validator(new Map([
      [["store", "update"],"Propriedade"]]))


    Route.resource("/Proprietarios", "ProprietarioController").apiOnly().validator(new Map([
      [["store", "update"],"Proprietario"]]))


    Route.resource("/Situacaovendedores", "SituacaoVendedorController").apiOnly().validator(new Map([
      [["store", "update"],"SituacaoVendedor"]]))

  }).middleware("auth")


