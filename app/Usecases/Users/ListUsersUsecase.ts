import User from 'App/Models/User'

export class ListUsersUsecase {
  public async execute(): Promise<User[]> {
    const users = await User.all()
    return users
  }
}
