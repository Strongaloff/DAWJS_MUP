var express = require('express');
var cors = require('cors');
var routes = require('./routes/party.route');

let app = express();
app.use(express.json());
app.use(cors());
app.use('/', routes);

app.listen(8001, () => {
  console.log('party-manager microservice is running');
});
