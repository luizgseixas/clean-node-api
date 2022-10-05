import { signUpPath, loginPath, surveyPath } from './paths'
import { badRequest, unauthorized, forbidden, notFound, serverError } from './components'
import { signUpParamsSchema, accountSchema, apiKeyAuthSchema, loginParamsSchema, surveySchema, surveysSchema, surveyAnswerSchema, errorSchema } from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node Api',
    description: 'API do curso do Mango para realizar enquetes entre programadores',
    version: '1.0.0'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }, {
    name: 'Enquete'
  }],
  paths: {
    '/signup': signUpPath,
    '/login': loginPath,
    '/surveys': surveyPath
  },
  schemas: {
    signUpParams: signUpParamsSchema,
    account: accountSchema,
    loginParams: loginParamsSchema,
    survey: surveySchema,
    surveys: surveysSchema,
    surveyAnswer: surveyAnswerSchema,
    error: errorSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    unauthorized,
    forbidden,
    notFound,
    serverError
  }
}
