import { Result } from 'App/Common/Result'
import User from 'App/Models/User'

type UsecaseParams = {
  userId: string
}

type UsecaseResult = Result<Error, User>

export class ShowUserUsecase {
  public async execute({ userId }: UsecaseParams): Promise<UsecaseResult> {
    const user = await User.find(userId)

    if (!user) {
      return Result.fail(new Error())
    }

    return Result.success(user)
  }
}
