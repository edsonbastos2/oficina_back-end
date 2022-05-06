import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Customers extends BaseSchema {
  protected tableName = 'customers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('cpf').notNullable().unique()
      table.string('email').notNullable().unique()
      table.string('telefone').notNullable().unique()
      table.enum('sexo',['M','F'])
      table.date('data_nascimento').notNullable()
      table.string('cep').notNullable()
      table.string('endereco')
      table.string('bairro')
      table.string('numero')
      table.string('cidade')
      table.string('estado')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
