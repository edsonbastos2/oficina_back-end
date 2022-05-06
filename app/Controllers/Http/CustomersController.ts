import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer'

export default class CustomersController {
  public async index({}: HttpContextContract) {
    const users = await Customer.all()
    return users
  }

  public async store({request}: HttpContextContract) {
    const data = request.all()
    const user = await Customer.create(data)
    return user
  }

  public async show({params}: HttpContextContract) {
    const user = await Customer.findOrFail(params.id)
    return user
  }

  public async update({params, request}: HttpContextContract) {
    const user = await Customer.findOrFail(params.id)
    const data = request.all()
    user.merge(data)
    await user.save()
    return user
  }

  public async destroy({params}: HttpContextContract) {
    const user = await Customer.findOrFail(params.id)
    user.delete()
  }
}
