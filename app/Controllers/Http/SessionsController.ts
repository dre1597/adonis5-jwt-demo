import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { User } from 'App/Models'
import { SessionValidator, SignUpValidator } from 'App/Validators'

export default class SessionsController {
  public async signUp({ request, response }: HttpContextContract) {
    const data = await request.validate(SignUpValidator)

    try {
      return await User.create(data)
    } catch (error) {
      return response.status(500).send({ error: 'Error on create user' })
    }
  }

  public async login({ auth, request, response }: HttpContextContract) {
    const { email, password } = await request.validate(SessionValidator)

    try {
      const user = await User.findByOrFail('email', email)
      const token = await auth.use('api').attempt(email, password)
      return { user, token }
    } catch (error) {
      return response.status(422).send({ error: 'Invalid credentials ' })
    }
  }
}
