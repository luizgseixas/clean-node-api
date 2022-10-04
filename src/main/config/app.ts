import setupMiddlewaress from './middlewares'
import setupSwagger from './config-swagger'
import setupRoutes from './routes'
import express from 'express'

const app = express()
setupSwagger(app)
setupMiddlewaress(app)
setupRoutes(app)
export default app
