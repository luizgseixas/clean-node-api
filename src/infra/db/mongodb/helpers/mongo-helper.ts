import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  // setando como null porque no js se você coloca : em um objeto ele entende que você esta atribuindo um valor, então inicializamos como null e forçamos o tipo dele
  client: null as MongoClient,
  url: null as string,

  async connect (url: string): Promise<void> {
    this.url = url
    // variavel setada pela lib @shelf/jest-mongodb
    this.client = await MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  async getCollection (name: string): Promise<Collection> {
    // client? faz com que, caso o client estiver null ele também caia na sentença
    if (!this.client?.isConnected()) {
      await this.connect(this.url)
    }
    return this.client.db().collection(name)
  },

  map (data: any): any {
    const { _id, ...collectionWithoutId } = data
    return Object.assign(collectionWithoutId, { id: _id })
  },

  mapCollection (collection: any[]): any[] {
    return collection.map(c => MongoHelper.map(c))
  }
}
