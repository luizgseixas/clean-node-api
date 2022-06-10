import { Controller, HttpRequest } from '../../presentation/protocols'
import { Request, Response } from 'express'

// adapter para qualquer controller ser aceito pelo express, caso seja necessário trocar o express futuramente

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
