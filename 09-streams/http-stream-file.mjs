import http from 'http';
import fs from 'fs';

const filePath = './files/index.html';

const server = http.createServer((req, res) => {
  // с потоком
  if ((req.url === '/') & (req.method === 'GET')) {
    const readStream = fs.createReadStream(filePath);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    readStream.pipe(res);
  }
  // без потока
  if ((req.url === '/no-stream') & (req.method === 'GET')) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Server error while loading HTML file');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  }
});

server.listen(5000, () => {
  console.log('Server is listening at port 5000');
});
