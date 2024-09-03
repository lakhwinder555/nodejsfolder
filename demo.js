const { createServer } = require('http');

const hostname = '127.0.0.1'; 
const port = 7000;

const server = createServer((req, res) => {
  res.statusCode = 200; 
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome to dits123'); 
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

