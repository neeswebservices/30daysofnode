const request = require('./request');
const response = require('./response');

function makeRequest(url, data) {
	request.send(url, data);
	return response.read();
}

const responsedata = makeRequest('http://www.google.com', 'hello');
console.log(responsedata);
