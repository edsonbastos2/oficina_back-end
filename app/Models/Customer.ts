import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name:string

  @column()
  public email:string

  @column()
  public telefone:string

  @column()
  public cpf:string

  @column()
  public Data_Nascimento:Date

  @column()
  public sexo:string

  @column()
  public cep:string

  @column()
  public endereco:string

  @column()
  public bairro:string

  @column()
  public numero:string

  @column()
  public cidade:string

  @column()
  public estado:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
