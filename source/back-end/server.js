let express = require('express');
let fs = require('fs');
let url = require('url');
let http = require('http');
let https = require('https');
const certificate = fs.readFileSync('../utils/liveserver/cert.crt', 'utf8');
const privateKey = fs.readFileSync('../utils/liveserver/key.key', 'utf8');
let credentials = {
    key: privateKey,
    cert: certificate
}

let cors=require('cors');
let app = express();

app.use("/cssFiles", express.static(__dirname + "/serve-pages/css/"))

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/serve-pages/register.html");
})

let httpsServer = https.createServer(credentials, app);

httpsServer.listen(8089);