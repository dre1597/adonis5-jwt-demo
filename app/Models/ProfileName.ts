import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import ProfileType from './ProfileType'

export default class ProfileName extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => ProfileType, {
    localKey: 'id',
    foreignKey: 'profile_name_id',
  })
  public profileType: HasOne<typeof ProfileType>
}
