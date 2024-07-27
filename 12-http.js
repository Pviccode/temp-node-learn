const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to my home page');
    } else if (req.url === '/about') {
        res.end('Here is our short history');
    } else {
        res.end(`
            <h1>Oops! Page not found<h1>
            <a href="/">back home</a>
        `)
    }
    console.log(req);
    // res.write('Welcome to my home page');
    // res.end()

});

server.listen(5000);