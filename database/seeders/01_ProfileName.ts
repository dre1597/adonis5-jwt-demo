import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ProfileName } from 'App/Models'

export default class ProfileNameSeeder extends BaseSeeder {
  public async run() {
    await ProfileName.createMany([
      {
        id: 1,
        name: 'module1',
      },
      {
        id: 2,
        name: 'module2',
      },
    ])
  }
}
