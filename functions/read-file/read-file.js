const fs = require('fs')

const contents = fs.readFileSync(require.resolve('./assets/test.txt'))

exports.handler = function(event, context, callback) {
  callback(null, {
  statusCode: 200,
  body: `${contents}`
  });
}