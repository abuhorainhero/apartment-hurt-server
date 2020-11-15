const express = require('express');
const app = express();
require('dotenv').config();

const port = 5000;

app.get('/', (req, res) => {
    res.send("Welcome, to Our team project - Server Live Site. Apartment Hurt Project.");
})

app.listen(port);