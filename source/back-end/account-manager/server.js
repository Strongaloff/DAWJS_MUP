var express = require('express');
var cors = require('cors');
var routes = require('./routes/account.routes');

let app = express();
app.use(express.json());
app.use(cors());
app.use('/', routes);

app.listen(8002, () => {
  console.log('account-manager microservice is running');
});
