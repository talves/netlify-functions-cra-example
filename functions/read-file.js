const fs = require('fs')
const path = require('path')

const contents = fs.readFileSync(path.resolve(__dirname, './assets/test.txt'))

exports.handler = function(event, context, callback) {
  callback(null, {
  statusCode: 200,
  body: `${contents}`
  });
}