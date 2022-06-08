import express from 'express'
import setupMiddlewaress from './middlewares'
import setupRoutes from './routes'

const app = express()
setupMiddlewaress(app)
setupRoutes(app)
export default app
