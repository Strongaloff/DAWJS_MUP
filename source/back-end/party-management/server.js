var express = require("express");
var cors = require("cors");
var partyRepository = require("./db-repo");
var app = express();
app.use(cors());

app.post("/", (req, res) => {
  let query = req.query;

  partyRepository.addNew(query.party_name, query.host_name);
  res.send(query.party_name);
});

app.get("/", (req, res) => {
  let party_name = req.query.party_name;

  res.send("invite code");
});

app.delete("/", (req, res) => {
  console.log(req.query.party_name);
});

app.listen(8001, () => console.log(`Example app listening on port 8001!`));
console.log();
