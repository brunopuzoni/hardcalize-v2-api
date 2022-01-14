import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    await User.createMany([
      { email: 'teste@gmail.com', password: '123123', name: 'Teste' },
      { email: 'bpuzoni@gmail.com', password: '123123', name: 'Bruno' },
    ])
  }
}
