const http = require('node:http');
const fs = require('node:fs/promises');
const routes = require('./routes.js');

const server = http.createServer();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'prod';

server.on('request', async (req, res) => {
  console.log(`Received request for ${req.url}`);

  // Get info of requested content stored on routes Map based on url
  const fileInfo = routes.get(req.url);

  // If requested url isn't on routes these values default to a 404 html page response
  const fileName = fileInfo?.fileName ?? '404.html';
  const contentType = fileInfo?.contentType ?? 'text/html';

  res.statusCode = fileInfo ? 200 : 404;
  res.setHeader('Content-Type', contentType);

  // Tell client to cache files on prod mode
  if (NODE_ENV === 'prod') {
    res.setHeader('Cache-Control', 'max-age=31536000');
  }

  try {
    // Try getting the file
    const file = await fs.readFile(`public/${fileName}`);
    res.setHeader('Content-Length', Buffer.byteLength(file));
    res.end(file);
  } catch (error) {
    // If file doesn't exist on public directory a 404 page is sent by default
    if (error.code === 'ENOENT') {
      console.warn(`Public directory is missing ${fileName}`);
      const errorPage = await fs.readFile('public/404.html');
      res.writeHead(404, {
        'Content-Type': 'text/html',
        'Content-Length': Buffer.byteLength(errorPage),
      });
      res.end(errorPage);
    } else {
      // For some unexpected error
      console.error(error.message);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Internal Server Error');
    }
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});