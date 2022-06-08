import { Express, Router } from 'express'
import fg from 'fast-glob'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  fg.sync('**/src/main/routes/**routes.ts').map(async file => {
    // import dentro de uma função quando já foi importado algo no header do arquivo deve ser feito assim
    // não tem como puxar algo especifico de dentro do arquivo tem que ser export default, por isso é colocado parenteses em volta ().default()
    (await import(`../../../${file}`)).default(router)
  })
}
