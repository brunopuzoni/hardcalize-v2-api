import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateSessionUsecase } from 'App/Usecases'

export default class SessionsController {
  public async create({ request, response }: HttpContextContract) {
    const { email, password } = request.body()
    const createSession = new CreateSessionUsecase()

    const session = await createSession.execute({ email, password })

    if (!session) {
      return response.unauthorized({ error: 'Incorrect email or password' })
    }

    return session
  }
}
