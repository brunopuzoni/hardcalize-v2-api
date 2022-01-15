import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateSessionUsecase } from 'App/Usecases'

export default class SessionsController {
  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const createSession = new CreateSessionUsecase()
    const session = await createSession.execute({ email, password })

    if (!session) {
      return response.unauthorized({ error: 'Incorrect email or password' })
    }

    const token = await auth
      .use('api')
      .generate(session, { expiresIn: '7days', name: session.email })

    response.header('Authorization', `Bearer ${token.token}`)

    return {
      user: session.toJSON(),
      token: `Bearer ${token.token}`,
    }
  }
}
