import { SurveyAnswareModel } from '../models/survey'

export interface AddSurveyModel {
  question: string
  answers: SurveyAnswareModel[]
  date: Date
}

export interface AddSurvey {
  add: (data: AddSurveyModel) => Promise<void>
}
