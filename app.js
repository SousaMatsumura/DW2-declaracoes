const http = require(http);

const server = http.createServer((req, res) => {
    console.log('Hello World!!!');
    res.end('Hello World');
});

serve.listen(3000);