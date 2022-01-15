import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

type UsecaseParams = {
  email: string
  password: string
}

export class CreateSessionUsecase {
  public async execute({
    email,
    password,
  }: UsecaseParams): Promise<User | false> {
    const user = await User.findBy('email', email)

    if (!user) {
      //needs improvement
      return false
    }

    const passwordConfirmed = await Hash.verify(user.password, password)

    if (!passwordConfirmed) {
      //needs improvement
      return false
    }

    return user
  }
}
