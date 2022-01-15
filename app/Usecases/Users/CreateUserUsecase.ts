import { Result } from 'App/Common/Result'
import User from 'App/Models/User'

type UsecaseParams = {
  email: string
  password: string
  name: string
}

type UsecaseResult = Result<Error, User>

export class CreateUserUsecase {
  public async execute({
    email,
    password,
    name,
  }: UsecaseParams): Promise<UsecaseResult> {
    const emailExists = await User.findBy('email', email)

    if (emailExists) {
      return Result.fail(new Error())
    }

    const user = await User.create({ email, password, name })

    return Result.success(user)
  }
}
