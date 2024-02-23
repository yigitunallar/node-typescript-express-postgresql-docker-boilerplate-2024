import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.specificType('id', 'CHAR(16)').primary();
    table.string('name');
    table.string('password').notNullable();
    table.string('email').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}
