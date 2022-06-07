import express from 'express'
import setupMiddlewaress from './middlewares'

const app = express()
setupMiddlewaress(app)
export default app
