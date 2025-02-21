const http = require('http');

const method = 'GET';  // or POST, depending on what you need
const URL = 'http://example.com';  // make sure it includes the protocol (http:// or https://)

const options = {
    method: method,
    headers: {
        'Content-Type': 'application/json'
    }
};

const req = http.request(URL, options, (res) => {
    let data = '';
    res.on('data', chunk => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(data);
    });
});

req.on('error', (error) => {
    console.error('Request failed with error:', error);
});

req.end();
