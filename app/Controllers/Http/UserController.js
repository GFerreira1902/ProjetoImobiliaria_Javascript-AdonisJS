'use strict'

const User=use("App/Models/User")

class UserController {

    async index( request, response, view){
        return User.query().select(["username", "email", "password"]).fetch()
    }

    async show ({ params, request, response, view }) {
        return await User.query()
                         .select(["username", "email"])
                         .where("id",params.id)
                         .first()
      }

    async store({request}){
        const camposCadastro=["username", "email", "password"]
        const dados = request.only(camposCadastro)

        return User.create(dados)
    }

    async token({request, auth}){
        const {email, password} = request.all()
        return await auth.attempt(email, password)
    }    
}


module.exports = UserController
