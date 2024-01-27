const express = require('express');
const path = require('path');

const userController = require('../controllers/userController.js');
const authController = require('../controllers/authController.js');

const router = express.Router();

router.get('/', userController.loginPage);
router.get('/register', userController.registerPage);
router.get('/dashboard', authController.isLoggedIn, userController.dashboardPage);
router.get('/logout', authController.logout);

