import { signUpPath, loginPath, surveyPath, surveyResultPath } from './paths'
import { badRequest, unauthorized, forbidden, notFound, serverError } from './components'
import { signUpParamsSchema, accountSchema, apiKeyAuthSchema, loginParamsSchema, addSurveyParamsSchema, surveySchema, surveysSchema, surveyAnswerSchema, saveSurveyResultParamsSchema, surveyResultSchema, errorSchema } from './schemas'

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
    '/surveys': surveyPath,
    '/surveys/{surveyId}/results': surveyResultPath

  },
  schemas: {
    signUpParams: signUpParamsSchema,
    account: accountSchema,
    loginParams: loginParamsSchema,
    addSurveyParams: addSurveyParamsSchema,
    survey: surveySchema,
    surveys: surveysSchema,
    surveyAnswer: surveyAnswerSchema,
    saveSurveyResultParams: saveSurveyResultParamsSchema,
    surveyResult: surveyResultSchema,
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
