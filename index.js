const http = require('node:http');

const server = http.createServer();
const PORT = process.env.PORT || 3000;

server.on('request', (req, res) => {
    res.end("It's working!");
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});