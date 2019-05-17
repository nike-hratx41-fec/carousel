const express = require('express');
const bodyParser = require('body-parser');
const port = 3004;
const db = require('../database')

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enter routes below

app.get('/carousel', (req, res) => res.send('Hello World!'))


app.listen(port, function () {
    console.log(`listening on port ${port}`);
});