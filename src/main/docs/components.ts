import { apiKeyAuthSchema } from './schemas/api-key-auth-schema'
import { badRequest, forbidden, notFound, serverError, unauthorized } from './components/'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  unauthorized,
  forbidden,
  notFound,
  serverError
}
