import { Express, Router } from 'express'
import { readdirSync } from 'fs'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  // import dentro de uma função quando já foi importado algo no header do arquivo deve ser feito assim
  // não tem como puxar algo especifico de dentro do arquivo tem que ser export default, por isso é colocado parenteses em volta ().
  readdirSync(`${__dirname}/../routes`).map(async file => {
    if (!file.includes('.test.') && !file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}
