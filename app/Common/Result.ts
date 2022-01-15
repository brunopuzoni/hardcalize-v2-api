/* eslint-disable @typescript-eslint/explicit-member-accessibility */
class Failure<L, A> {
  readonly value: L

  constructor(value: L) {
    this.value = value
  }

  isFailure(): this is Failure<L, A> {
    return true
  }

  isSuccess(): this is Success<L, A> {
    return false
  }
}

class Success<L, A> {
  readonly value: A

  constructor(value: A) {
    this.value = value
  }

  isFailure(): this is Failure<L, A> {
    return false
  }

  isSuccess(): this is Success<L, A> {
    return true
  }
}

export type Result<L, A> = Failure<L, A> | Success<L, A>

export namespace Result {
  export const fail = <L, A>(l: L): Result<L, A> => {
    return new Failure<L, A>(l)
  }

  export const success = <L, A>(a: A): Result<L, A> => {
    return new Success<L, A>(a)
  }
}
