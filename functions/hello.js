exports.handler = function(event, context, callback) {
  const message = "Hello from hello.js!"
  callback(null, {
  statusCode: 200,
  body: `${message}`
  });
}