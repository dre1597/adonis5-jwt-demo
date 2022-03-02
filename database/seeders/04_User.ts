import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { User } from 'App/Models'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        id: 1,
        email: 'email1@email.com',
        password: '123456',
        access_profile_id: 1,
      },
      {
        id: 2,
        email: 'email2@email.com',
        password: '123456',
        access_profile_id: 2,
      },
      {
        id: 3,
        email: 'email3@email.com',
        password: '123456',
        access_profile_id: 3,
      },
    ])
  }
}
