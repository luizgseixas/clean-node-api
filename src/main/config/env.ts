export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://root:mongoDB2022!@mongo:27017/clean?authSource=admin',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'tjkshdf674=-'
}
