const express = require("express");
const trackRoute = express.Router();
const multer = require("multer");
const { Readable } = require("stream");
const mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;

const app = express();

app.use("/getTracks", trackRoute);

let db;
MongoClient.connect("mongodb://localhost/trackDB", (err, database) => {
  db = database;

  console.log(db);

  trackRoute.get("/:trackID", (req, res) => {
    try {
      var trackID = new ObjectID(req.params.trackID);
    } catch (err) {
      return res.status(400).json({
        message: "invalid trackID in URL"
      });
    }
    res.set("content-type", "audio/mp3");
    res.set("accept-ranges", "bytes");

    let bucket = new mongodb.GridFSBucket(db, {
      bucketName: "tracks"
    });

    let downloadStream = bucket.openDownloadStream(trackID);

    downloadStream.on("data", chunk => {
      res.write(chunk);
    });

    downloadStream.on("error", () => {
      res.sendStatus(404);
    });

    downloadStream.on("end", () => {
      res.end();
    });
  });

  trackRoute.post("/", (req, res) => {
    const storage = multer.memoryStorage();
    const upload = multer({
      storage: storage,
      limits: { fields: 1, fileSize: 6000000, files: 1, parts: 2 }
    });
    upload.single("track")(req, res, err => {
      if (err) {
        return res
          .status(400)
          .json({ message: "upload request validation error" });
      } else if (!req.body.name) {
        return res
          .status(400)
          .json({ message: "no track name" });
      }

      let trackName = req.body.name;

      console.log("HERE I AM BEFORE!");

      const readableTrackStream = new Readable();
      readableTrackStream.push(req.file.buffer);
      readableTrackStream.push(null);

      const bucket = new mongodb.GridFSBucket(db, {
        chunkSizeBytes: 1024,
        bucketName: "tracks"
      });

      console.log("HERE I AM!");

      let uploadStream = bucket.openUploadStream(trackName);
      let id = uploadStream.id;
      readableTrackStream.pipe(uploadStream);

      uploadStream.on("error", () => {
        return res.status(500).json({ message: "Error uploading file" });
      });

      // db require for get: trackName in order to get objectID

      uploadStream.on("finish", () => {
        return res.status(201).json({
          message: "File uploaded: " + id
        });
      });
    });
  });

  app.listen(8080, () => {
    console.log("App listening on port 8080!");
  });
});
