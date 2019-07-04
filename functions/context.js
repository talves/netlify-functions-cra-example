exports.handler = function(event, context, callback) {
  callback(null, {
  statusCode: 200,
  body: `{\ncontext: ${JSON.stringify(context,null,2)},\nevent: ${JSON.stringify(event,null,2)}\n}`
  });
}
