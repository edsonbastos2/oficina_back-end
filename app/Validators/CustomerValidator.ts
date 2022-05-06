import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CustomerValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({trim:true}),
    cpf: schema.string({trim:true}, [rules.minLength(11)]),
    email: schema.string({trim:true}, [rules.email]),
    telefone: schema.string({trim:true}, [rules.minLength(15)]),
    sexo: schema.enum(['admin', 'normal'] as const),
    cep: schema.string({trim:true}, [rules.minLength(8)]),
    endereco:schema.string({trim:true}),
    bairro: schema.string({trim:true}),
    numero: schema.string({trim:true}),
    cidade: schema.string({trim:true}),
    estado: schema.string({trim:true})
  })

  public messages = {}
}
