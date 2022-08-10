export class AccessDenidedError extends Error {
  constructor () {
    super('Access denided')
    this.name = 'AccessDenidedError'
  }
}
