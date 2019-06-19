const fetch = require('node-fetch');

exports.handler = async function(event, context, callback) {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        if (!response.ok) { // NOT res.status >= 200 && res.status < 300
            return { statusCode: response.status, body: response.statusText };
        }
        const data = await response.json();
        // throw new Error("just a test");
        return {
            statusCode: 200,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        };
    } catch (err) {
        console.log('invocation error:', err.message); // output to netlify function log
        return {
            statusCode: 500,
            body: err.message // Could be a custom message or object i.e. JSON.stringify(err)
        };
    }
};
