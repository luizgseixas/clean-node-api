export type SurveyModel = {
  id: string
  question: string
  answers: SurveyAnswareModel[]
  date: Date
}

export interface SurveyAnswareModel {
  image?: string
  answer: string
}
