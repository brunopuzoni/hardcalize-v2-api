import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SetupExtensions extends BaseSchema {
  public async up() {
    this.schema.raw('CREATE EXTENSION IF NOT EXISTS "pgcrypto"')
    this.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
  }

  public async down() {
    this.schema.raw('DROP EXTENSION IF EXISTS "uuid-ossp"')
    this.schema.raw('DROP EXTENSION IF EXISTS "pgcrypto"')
  }
}
