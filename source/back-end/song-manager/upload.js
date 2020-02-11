var express = require("express");
var multer = require("multer");
var fs = require("fs");
var app = express();

var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function(req, file, callback) {
    callback(null, file.fieldname + "-" + Date.now());
  }
});

var upload = multer({ storage: storage }).single("uploadSong");

app.post("/", function(req, res) {
  upload(req, res, function(err) {
    if (err) {
      return res.end("Error uploading file.");
    }
    console.log(req.file);
    fs.rename(`./${req.file.path}`, `./uploads/${req.file.originalname}`, function(
      err
    ) {
      if (err) console.log("ERROR: " + err);
    });
    res.end("File is uploaded");
  });
  //   console.log(req);
});

app.listen(8003, function() {
  console.log("Working on port 3000");
});
