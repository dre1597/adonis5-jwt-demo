import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import AccessProfile from './AccessProfile'
import ProfileName from './ProfileName'

export default class ProfileType extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public premium: boolean

  @column()
  public vip: boolean

  @column()
  public regular: boolean

  @column()
  public profile_name_id: number

  @column()
  public access_profile_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => ProfileName, {
    localKey: 'profile_name_id',
    foreignKey: 'id',
  })
  public profileName: BelongsTo<typeof ProfileName>

  @belongsTo(() => AccessProfile, {
    foreignKey: 'access_profile_id',
  })
  public accessProfile: BelongsTo<typeof AccessProfile>
}
