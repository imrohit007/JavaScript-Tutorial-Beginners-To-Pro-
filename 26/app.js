console.log('Hello, node.js')

const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, Node.js Server!!');
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
})