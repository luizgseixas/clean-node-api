import { HttpRequest, Middleware } from '../../presentation/protocols'
import { NextFunction, Request, Response } from 'express'

// adapter para qualquer controller ser aceito pelo express, caso seja necessário trocar o express futuramente
// design patern proxy, acessar um objeto através de outro objeto do mesmo tipo, esse objeto faz algum tipo de filtro, geralmente pra ver se você tem permissão pra acessar os dados do segundo objeto
export const adaptMiddleware = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      headers: req.headers
    }

    const httpResponse = await middleware.handle(httpRequest)
    console.log(httpResponse)
    if (httpResponse.statusCode === 200) {
      Object.assign(req, httpResponse.body)
      next()
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}
