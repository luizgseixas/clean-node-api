import { Request, Response, NextFunction } from 'express'

// setando que o formato default de resposta da api é em json
export const contentType = (req: Request, res: Response, next: NextFunction): void => {
  res.type('json')
  next()
}
