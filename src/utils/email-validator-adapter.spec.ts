import { EmailValidatorAdapter } from './email-validator'
import validator from 'validator'

// mocando o retorno pra sempre ser true
jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

describe('EmailValidator Adapter', () => {
  test('Should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    // mockando o valor de retorno da função para sempre retornar false
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })

  test('Should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('valid_email@mail.com')
    expect(isValid).toBe(true)
  })

  test('Should call validator with correct email', () => {
    const sut = new EmailValidatorAdapter()
    const isEmailSpy = jest.spyOn(validator, 'isEmail')
    sut.isValid('any_email@mail.com')
    // aqui estou esperando que o isEmailSpy seja chamado com o valor passado, no caso o 'any_email@mail.com'
    expect(isEmailSpy).toHaveBeenCalledWith('any_email@mail.com')
  })
})
