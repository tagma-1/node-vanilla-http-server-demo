const HTTP = require('http');
const { sendJSON, sendHTML, sendImage } = require('./utils')


const server = HTTP.createServer((request, response) => {
  const path = request.url
  console.log('Request received', path);
  if (path === '/') {
    sendHTML(response, 'Home');
  } else if (path === '/hello') {
    response.end('Hello!');
  } else if (path === '/about') {
    sendHTML(response, `
      <h1> About </h1>
      <p> This is a paragraph </h1>
    `);
  } else if (path === '/postcode') {
    sendJSON(response, { "name" : "City", "postcode": 1000});
  } else if (path === '/postcode/9000') {
    sendJSON(response, { "name" : "City9000", "postcode": 9000});
  } else if (path === '/assets/main.css') {
    response.writeHead(200, {
      'Content-Type': 'text/css'
    });
    response.end(`
    h1 {
      text-align: center;
    }
    `);     
  } else if (path === '/assets/example.gif') {
    sendImage(response, './assets/simpsons_gif.gif');
  } else {
    response.writeHead(404, {
      'Content-Type': 'application/json'
    });
    response.end(JSON.stringify({ '404': 'Page not found'}));
  }
});

// Start the server
server.listen(7000, (error) => {
  console.log('Server has started at http://localhost:7000')
});