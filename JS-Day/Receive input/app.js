

let http = require('http');

let server = http.createServer((req, res) => {
    let url = req.url;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>')
        res.write('<body><form action="/create-user" method="post"><input type="text" name="username">' +
            '<button type="submit">Send</button></form><body>')
        res.write('</html>');
        return res.end();
    }
    if(url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>')
        res.write('<body><ul><li>User1</li><li>User2</li></ul></body>')
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user') {
        let body = [];
        req.on("data", chunk => {
            body.push(chunk);
        });
        req.on("end", () => {
            let parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
});

server.listen(3000);
