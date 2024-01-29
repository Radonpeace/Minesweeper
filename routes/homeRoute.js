const express =  require('express');
const router = express.Router();

const homeController = require('../controllers/homeController.js');
router.get('/', homeController.homePage);

router.post('/login', homeController.loginUtils);

router.get('/login', homeController.loginPage);

router.get('/signup', homeController.signupPage);



router.post('/signup', homeController.signupUtils);

router.get('/leaderboard', homeController.leaderboardPage);

module.exports = router;

