import { accountSchema, addSurveyParamsSchema, errorSchema, loginParamsSchema, saveSurveyResultParamsSchema, signUpParamsSchema, surveyAnswerSchema, surveyResultSchema, surveySchema, surveysSchema } from './schemas/'

export default {
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
}
