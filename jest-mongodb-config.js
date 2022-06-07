module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: '4.7.0',
      skipMD5: true
    },
    autoStart: true
  }
}
