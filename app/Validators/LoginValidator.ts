import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'

export default class LoginValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    email: schema.string({}, [rules.email()]),
    password: schema.string({}, [rules.minLength(6)]),
  })
  public messages = {
    'required': '{{ field }} is required',
    'email.email': 'Email format is invalid',
    'password.minLength': 'Passwords need to be at least 6 characters long',
  }
}
