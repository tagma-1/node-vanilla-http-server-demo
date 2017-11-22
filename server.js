const HTTP = require('http');

const server = HTTP.createServer((request, response) => {
  console.log('Request received');
});

// Start the server
server.listen(7000, (error) => {
  console.log('Server has started at http://localhost:7000')
});