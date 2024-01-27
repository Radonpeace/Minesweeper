const express = require('express');
const path = require('path');
const homeRoute = require('./routes/firstRoute.js');
// const db = require('./db.js');
const mysql = require('mysql');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'radon',
    password: 'Ssai@12345',
    database: 'radon',
});

db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to the database');
});

app.use((req, res, next) => {
    req.db = db;
    next();
});

app.use('/', homeRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});