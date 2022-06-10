import { MongoHelper as sut } from './mongo-helper'
// o import acima dá um apelido para o MongoHelper que está sendo importado sendo assim chamado de sut

describe('MongoHelper', () => {
  beforeAll(async () => {
    await sut.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {

  })

  test('Should reconnect if mongodb is down', async () => {
    let accountCollection = await sut.getCollection('account')
    expect(accountCollection).toBeTruthy()
    await sut.disconnect()
    accountCollection = await sut.getCollection('account')
    expect(accountCollection).toBeTruthy()
  })
})
