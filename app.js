const express = require('express');
const path = require('path');
const homeRoute = require('./routes/homeRoute.js');
const userRoute = require('./routes/userRoute.js');
const mysql = require('mysql2');
const app = express();
var flash = require('connect-flash');
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
// Middleware to parse the form data
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
const auth = require('./middleware/auth.js');

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'ridhan',
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

app.use(express.json());

app.get('/clear', (req, res) => {
    res.clearCookie('jwt');
    res.clearCookie('userId');
    res.redirect('/');
});

app.use('/', homeRoute);

app.use(auth);

app.get('/startGame',  (req, res) => {
    res.render('game');
});

app.get('/logout', (req, res) => {
    res.clearCookie('jwt');
    res.clearCookie('userId');
    res.redirect('/');
});


app.use('/user',userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});