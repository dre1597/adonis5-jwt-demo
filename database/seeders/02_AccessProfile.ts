import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { AccessProfile } from 'App/Models'

export default class AccessProfileSeeder extends BaseSeeder {
  public async run() {
    await AccessProfile.createMany([
      {
        id: 1,
        name: 'profile 1',
      },
      {
        id: 2,
        name: 'profile 2',
      },
      {
        id: 3,
        name: 'profile 3',
      },
    ])
  }
}
