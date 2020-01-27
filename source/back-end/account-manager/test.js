var express = require('express');
var cors = require('cors');
var routes = require('./routes/accountRoutes');

let app = express();

app.use(cors());
app.get('/', (req, res) => {
  res.send('hi');
});

app.listen(8002, () => {
  console.log('account-manager microservice is running');
});
