var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

    console.log("I'm here");

    if (req.session.name == null || req.session.name === "") {
        return res.render('login', {title: 'Max Live'});
    }

    console.log("Welcome back, " + req.session.name);
    res.render('index', {
        title: 'Max Live',
        name: req.session.name
    });
});

router.post('/login', function(req, res) {
    var username = req.body.theText;

    req.session.name = username;

    console.log("Welcome, " + req.session.name);

    res.redirect("/");
});

router.get('/logout', function(req, res) {
    console.log("See ya, " + req.session.name);
    req.session.name = "";
    res.redirect('/');
});

module.exports = router;
