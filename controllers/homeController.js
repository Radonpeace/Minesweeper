exports.homePage = (req, res) => {
    res.render('index');
}
exports.gamePage = (req, res) => {
    res.render('game');
}

exports.loginPage = (req, res) => {
    res.render('login.ejs');
}

exports.signupPage = (req, res) => { 
    res.render('signup.ejs');
}