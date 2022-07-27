import { EmailValidatorAdapter } from './email-validator-adapter'
import validator from 'validator'

// mocando o retorno pra sempre ser true
jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter()
}

describe('EmailValidator Adapter', () => {
  test('Should return false if validator returns false', () => {
    const sut = makeSut()
    // mockando o valor de retorno da função para sempre retornar false
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })

  test('Should return false if validator returns false', () => {
    const sut = makeSut()
    const isValid = sut.isValid('valid_email@mail.com')
    expect(isValid).toBe(true)
  })

  test('Should call validator with correct email', () => {
    const sut = makeSut()
    const isEmailSpy = jest.spyOn(validator, 'isEmail')
    sut.isValid('any_email@mail.com')
    // aqui estou esperando que o isEmailSpy seja chamado com o valor passado, no caso o 'any_email@mail.com'
    expect(isEmailSpy).toHaveBeenCalledWith('any_email@mail.com')
  })
})
