import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateUserUsecase, ListUsersUsecase } from 'App/Usecases'

export default class UsersController {
  public async index() {
    const listUsers = new ListUsersUsecase()

    const users = await listUsers.execute()

    return users.map((user) => user.toJSON())
  }

  public async create({ request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    const name = request.input('name')

    const createUser = new CreateUserUsecase()

    const newUser = await createUser.execute({ email, password, name })

    if (newUser.isFailure()) {
      return response.unprocessableEntity({ error: 'email already in use' })
    }

    return newUser.value.toJSON()
  }
}
