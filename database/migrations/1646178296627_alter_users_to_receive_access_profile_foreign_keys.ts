import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterUsersToReceiveAccessProfileForeignKeys extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .integer('access_profile_id')
        .unsigned()
        .references('id')
        .inTable('access_profiles')
        .onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('access_profile_id')
      table.dropColumn('access_profile_id')
    })
  }
}
