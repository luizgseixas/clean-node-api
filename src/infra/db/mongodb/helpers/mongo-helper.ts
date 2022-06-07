import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  // setando como null porque no js se você coloca : em um objeto ele entende que você esta atribuindo um valor, então inicializamos como null e forçamos o tipo dele
  client: null as MongoClient,

  async connect (url: string): Promise<void> {
    // variavel setada pela lib @shelf/jest-mongodb
    this.client = await MongoClient.connect(url)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map (collection: any): any {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign(collectionWithoutId, { id: _id })
  }
}
