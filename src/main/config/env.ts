export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://root:mongoDB2022!@localhost:27017/clean?authSource=admin',
  port: process.env.PORT || 5050
}
