const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const spotify = require('./routes/spotify');

const app = express();

dotenv.config();

const PORT = process.env['PORT'];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', spotify);

app.listen(PORT, () => {
    console.log(`Server is running at localhost: ${PORT}`);
});