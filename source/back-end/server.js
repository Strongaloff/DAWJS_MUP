let express = require("express");
let fs = require("fs");
let https = require("https");
const certificate = fs.readFileSync("../utils/liveserver/cert.crt", "utf8");
const privateKey = fs.readFileSync("../utils/liveserver/key.key", "utf8");
let credentials = {
  key: privateKey,
  cert: certificate
};

let cors = require("cors");
let app = express();

app.use("/cssFiles", express.static(__dirname + "/serve-pages/css/"));
app.use("/uploads", express.static(__dirname + "/uploads/"))

app.get("/register", function(req, res) {
  res.sendFile(__dirname + "/serve-pages/register.html");
});

app.get("/login", function(req, res) {
  res.sendFile(__dirname + "/serve-pages/login.html");
});

app.get("/main", function(req, res) {
  res.sendFile(__dirname + "/serve-pages/main.html");
});

app.get("/create", function(req, res) {
  res.sendFile(__dirname + "/serve-pages/create.html");
});

app.get("/join", function(req, res) {
  res.sendFile(__dirname + "/serve-pages/join.html");
});

app.get("/testing", function(req, res) {
  res.sendFile(__dirname + "/serve-pages/testing.html");
})

app.get("/party", function(req, res) {
  res.sendFile(__dirname + "/serve-pages/party.html");
});

let httpsServer = https.createServer(credentials, app);

httpsServer.listen(8089);
