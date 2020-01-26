var express = require("express");
var cors = require("cors");
var routes = require("./routes/accountRoutes");
let app = express();

app.use(cors());

app.use("/", routes);

app.listen(5002, () => {
  console.log("account-manager microservice is running");
});
