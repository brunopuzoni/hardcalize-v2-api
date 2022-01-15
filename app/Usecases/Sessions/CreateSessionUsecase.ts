import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import { Result } from 'App/Common/Result'

type UsecaseParams = {
  email: string
  password: string
}

type UsecaseResult = Result<Error, User>

export class CreateSessionUsecase {
  public async execute({
    email,
    password,
  }: UsecaseParams): Promise<UsecaseResult> {
    const user = await User.findBy('email', email)

    if (!user) {
      return Result.fail(new Error())
    }

    const passwordConfirmed = await Hash.verify(user.password, password)

    if (!passwordConfirmed) {
      return Result.fail(new Error())
    }

    return Result.success(user)
  }
}
