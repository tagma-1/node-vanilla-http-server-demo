const FS = require('fs');

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
  response.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/assets/main.css">
    <title>Server</title>
  </head>
  <body>
    ${content}
  </body>
  </html>
  `);
}

function sendImage(response, image) {
  let img = FS.readFileSync(image);
  response.writeHead(200, {
    'Content-Type': 'image/gif'
  });
  response.end(img);
}

module.exports = {
  sendJSON,
  sendHTML,
  sendImage
}