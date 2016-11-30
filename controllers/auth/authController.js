var router = require('express').Router();
var bodyParser = require('body-parser');
var User = require('../../models/User');
var hash = require('../../helpers/hash');

var urlencoded = bodyParser.urlencoded({ extended: false });

router.route('/login')
  .get(function(req, res) {
    res.render('login.ejs');
  })
  .post(urlencoded, function(req, res) {
    var usn = req.body.username;
    var psw = req.body.password;

    User.find({username: usn, password: hash(psw)})
        .limit(1)
        .exec(function(err, users){
          if(users[0]) {
            console.log('auth success');
            req.session.user = users[0];
          }

          res.redirect('/');
        })
  });

module.exports = router;
