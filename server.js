const HTTP = require('http');
const { sendJSON } = require('./utils')

const server = HTTP.createServer((request, response) => {
  const path = request.url
  console.log('Request received', path);
  if (path === '/') {
    response.end('Home');
  } else if (path === '/hello') {
    response.end('Hello!');
  } else if (path === '/about') {
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.end(`
    <! doctype html>
    <html>
      <body>
        <h1> About </h1>
        <p> This is a paragraph </h1>
      </body>
    </html>`);
  } else if (path === '/postcode') {
    sendJSON(response, { "name" : "City", "postcode": 1000});
  } else if (path === '/postcode/9000') {
    sendJSON(response, { "name" : "City9000", "postcode": 9000});
  } else {
    response.writeHead(404);
    response.end('Page not found');
  }
});

// Start the server
server.listen(7000, (error) => {
  console.log('Server has started at http://localhost:7000')
});