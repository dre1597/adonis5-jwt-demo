import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProfileTypes extends BaseSchema {
  protected tableName = 'profile_types'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.boolean('premium').notNullable().defaultTo(false)
      table.boolean('vip').notNullable().defaultTo(false)
      table.boolean('regular').notNullable().defaultTo(true)
      table
        .integer('profile_name_id')
        .unsigned()
        .references('id')
        .inTable('profile_names')
        .onDelete('CASCADE')
      table
        .integer('access_profile_id')
        .unsigned()
        .references('id')
        .inTable('access_profiles')
        .onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
