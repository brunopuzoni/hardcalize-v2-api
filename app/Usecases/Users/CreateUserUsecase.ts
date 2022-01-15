import User from 'App/Models/User'

type UsecaseParams = {
  email: string
  password: string
  name: string
}

export class CreateUserUsecase {
  public async execute({
    email,
    password,
    name,
  }: UsecaseParams): Promise<User | false> {
    const emailExists = await User.findBy('email', email)

    if (emailExists) {
      //needs improvement
      return false
    }

    const user = await User.create({ email, password, name })

    return user
  }
}
