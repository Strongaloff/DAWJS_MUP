var express = require("express");
var cors = require("cors");
var party = require("./routes/party");

let app = express();

app.use(cors());
app.use("/", party);

app.listen(8001, () => {
  console.log(`party management microservice is running`);
});
