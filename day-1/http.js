const { request } = require('https');

const req = request('https://www.google.com', (res) => {
	res.on('data', (chunk) => {
		console.log(`Data chunk : ${chunk.toString()}`);
	});
	res.on('end', () => {
		console.log('No more data');
	});
});

req.end();
