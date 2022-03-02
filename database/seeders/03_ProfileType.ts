import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ProfileType } from 'App/Models'

export default class ProfileTypeSeeder extends BaseSeeder {
  public async run() {
    await ProfileType.createMany([
      {
        id: 1,
        vip: true,
        regular: true,
        access_profile_id: 1,
        profile_name_id: 1,
      },
      {
        id: 2,
        vip: true,
        regular: true,
        access_profile_id: 1,
        profile_name_id: 2,
      },
      {
        id: 3,
        vip: false,
        regular: false,
        access_profile_id: 2,
        profile_name_id: 1,
      },
      {
        id: 4,
        vip: false,
        regular: false,
        access_profile_id: 2,
        profile_name_id: 2,
      },
      {
        id: 5,
        vip: false,
        regular: true,
        access_profile_id: 3,
        profile_name_id: 1,
      },
      {
        id: 6,
        vip: true,
        regular: false,
        access_profile_id: 3,
        profile_name_id: 2,
      },
    ])
  }
}
