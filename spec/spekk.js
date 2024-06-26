var mongowave = require('mongowave')

module.exports = async function () {
  var db = await mongowave('waveorb-error-test')
  var error = require('../index.js')({ db })

  var $ = { db, error }

  return { $ }
}
