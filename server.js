const HTTP = require('http');

const server = HTTP.createServer((request, response) => {
  const path = request.url
  console.log('Request received', path);
  if (path === '/') {
    response.end('Home');
  } else if (path === '/hello') {
    response.end('Hello!');
  } else if (path === '/postcode.json') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    });
    response.end(`{ "name" : "City", "postcode": 1000}`);
  } else {
    response.end('Response to your request');
  }
});

// Start the server
server.listen(7000, (error) => {
  console.log('Server has started at http://localhost:7000')
});