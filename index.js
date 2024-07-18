const http = require('node:http');
const fs = require('node:fs/promises');

const server = http.createServer();
const PORT = process.env.PORT || 3000;

server.on('request', async (req, res) => {
  let filePath = null;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  switch (req.url) {
    case '/':
      filePath = 'index.html';
      break;
    case '/about':
      filePath = 'about.html';
      break;
    case '/contact-me':
      filePath = 'contact-me.html';
      break;
    default:
      filePath = '404.html';
      res.statusCode = 404;
  }

  try {
    const file = await fs.readFile(filePath);
    res.setHeader('Content-Legth', Buffer.byteLength(file));
    res.write(file);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.write('500 Internal Server Error');
  }

  res.end();
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});