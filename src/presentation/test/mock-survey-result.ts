import { SaveSurveyResult, SaveSurveyResultParams } from '../controllers/survey-result/save-survey-result/save-survey-result-protocols'
import { SurveyResultModel } from '../../domain/models/survey-result'
import { mockSurveyResultModel } from '../../domain/test'

export const mockSaveSurveyResult = (): SaveSurveyResult => {
  class SaveSurveyResultStub implements SaveSurveyResult {
    async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
      return Promise.resolve(mockSurveyResultModel())
    }
  }
  return new SaveSurveyResultStub()
}
