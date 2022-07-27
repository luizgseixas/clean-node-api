export interface AddSurveyModel {
  question: string
  answers: SurveyAnsware[]
}

export interface SurveyAnsware {
  image: string
  answer: string
}

export interface AddSurvey {
  add: (data: AddSurveyModel) => Promise<void>
}
