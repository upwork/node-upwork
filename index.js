const packageJson = require('./package.json')
const version = packageJson.version

module.exports = require('./lib/api').UpworkApi;
