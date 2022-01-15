import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateUserUsecase, ListUsersUsecase } from 'App/Usecases'

export default class UsersController {
  public async index() {
    const listUsers = new ListUsersUsecase()

    const users = await listUsers.execute()

    return users.map((user) => user.toJSON())
  }

  public async create({ request, response }: HttpContextContract) {
    const { email, password, name } = request.body()
    const createUser = new CreateUserUsecase()

    const newUser = await createUser.execute({ email, password, name })

    if (!newUser) {
      return response.unprocessableEntity({ error: 'email already in use' })
    }

    return newUser
  }
}
