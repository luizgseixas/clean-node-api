import { AccountModel, AddAccount, AddAccountParams } from '../controllers/login/signup/signup-controller-protocols'
import { mockAccountModel } from '../../domain/test'
import { Authentication, AuthenticationParams } from '../controllers/login/login/login-controller-protocols'
import { LoadAccountByToken } from '../middlewares/auth-middleware-protocols'

export const mockAddAccount = (): AddAccount => {
  class AddAccountStub implements AddAccount {
    async add (account: AddAccountParams): Promise<AccountModel> {
      return Promise.resolve(mockAccountModel())
    }
  }
  return new AddAccountStub()
}

export const mockAuthentication = (): Authentication => {
  class AuthenticationStub implements Authentication {
    async auth (authentication: AuthenticationParams): Promise<string> {
      return Promise.resolve('any_token')
    }
  }
  return new AuthenticationStub()
}

export const mockLoadAccountByToken = (): LoadAccountByToken => {
  class LoadAccountByTokenStub implements LoadAccountByToken {
    async load (accessToken: string, role?: string | undefined): Promise<AccountModel> {
      return Promise.resolve(mockAccountModel())
    }
  }
  return new LoadAccountByTokenStub()
}
