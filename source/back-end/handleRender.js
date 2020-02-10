let fs = require('fs');
let url = require('url');

let renderHTML = (path, res) => {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write("Page not found");
        }
        else {
            res.write(data);
        }
        res.end();
    });
}

module.exports = {
    handleReq: (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});

        let path = url.parse(req.url).pathname;
        if(path === './login')
            renderHTML('../front-end/new/login.html', res)
    }
}