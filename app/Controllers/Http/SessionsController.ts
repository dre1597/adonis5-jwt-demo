import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { User } from 'App/Models'
import { RefreshTokenValidator, LoginValidator, SignUpValidator } from 'App/Validators'

export default class SessionsController {
  public async signUp({ request, response }: HttpContextContract) {
    const data = await request.validate(SignUpValidator)

    try {
      return await User.create(data)
    } catch (error) {
      return response.status(500).send({ error: 'Error on create user' })
    }
  }

  public async login({ auth, request }: HttpContextContract) {
    const { email, password } = await request.validate(LoginValidator)

    const user = await User.findByOrFail('email', email)
    const token = await auth.use('jwt').attempt(email, password)
    return { user, token }
  }

  public async refresh({ request, auth }: HttpContextContract) {
    const { refreshToken } = await request.validate(RefreshTokenValidator)
    const token = await auth.use('jwt').loginViaRefreshToken(refreshToken)
    return { user: auth.user, token }
  }
}
