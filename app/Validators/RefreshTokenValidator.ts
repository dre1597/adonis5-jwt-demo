import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RefreshTokenValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    refreshToken: schema.string({}, [
      rules.exists({ table: 'jwt_tokens', column: 'refresh_token' }),
    ]),
  })
  public messages = {
    required: '{{ field }} is required',
  }
}
