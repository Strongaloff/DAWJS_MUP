var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var routes = require('./routes/router');
let app = express();

app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
app.use('/', routes);

app.listen(6969, () => {
  console.log('api gateway is running');
});
