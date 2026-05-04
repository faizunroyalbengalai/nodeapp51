const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
  } else if (req.url === '/api/info') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ app: 'nodeapp51', version: '1.0.0' }));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const fs = require('fs');
    const path = require('path');
    const indexPath = path.join(__dirname, '..', 'index.html');
    if (fs.existsSync(indexPath)) {
      res.end(fs.readFileSync(indexPath));
    } else {
      res.end('<h1>nodeapp51</h1>');
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});