import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUserSeeder extends BaseSeeder {
  // public static developmentOnly = true
  public async run () {
    await User.createMany([
      {
        email:'edsonbastos2@hotmail.com',
        password:'123456',
        role:'admin'
      },
      {
        email:'normal@normal.com',
        password:'123456',
        role:'normal'
      },
  ])
  }
}
