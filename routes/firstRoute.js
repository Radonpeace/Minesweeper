const express =  require('express');
const router = express.Router();

const homeController = require('../controllers/homeController.js');
router.get('/', homeController.homePage);


router.get('/start', homeController.gamePage);

router.get('/login', homeController.loginPage);

router.get('/signup', homeController.signupPage);

router.get('/getUsers', async (req, res) => {
    const db = req.db;
    let usersDataToInsert = [['John','johndoe@gmail.com','123456'],['Peter','peteenglandr@gmail.com','12345']];
    let sql = 'INSERT INTO users(username,email,password) VALUES ?';

    // db.query(sql, [usersDataToInsert], (err, result) => {
    //     if(err) throw err;
    //     console.log(result);
    //     res.send('Data inserted successfully');
    // });
    
    const showUsersQuery = 'SELECT * FROM users';
    db.query(showUsersQuery, (err, result) => {
        if(err) throw err;
        res.send(result);
    });

});

module.exports = router;

