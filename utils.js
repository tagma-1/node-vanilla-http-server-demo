function sendJSON(response, object) {
  response.writeHead(200, {
    'Content-Type': 'application/json'
  });
  response.end(JSON.stringify(object));
}

function sendHTML(response, content) {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  response.end(content);
}

module.exports = {
  sendJSON,
  sendHTML
}