const http = require('node:http');
const fs = require('node:fs/promises');

const server = http.createServer();
const PORT = process.env.PORT || 3000;

server.on('request', async (req, res) => {
  let filePath = '';

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
  }

  try {
    const file = await fs.readFile(filePath);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(file);
  } catch (error) {
    if (error.code === 'ENOENT') {
      const errorPage = await fs.readFile('404.html');
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write(errorPage);
    } else {
      console.error(error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.write('500 Internal Server Error');
    }
    
  }

  res.end();
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});