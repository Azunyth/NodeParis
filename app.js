var express = require('express');
var fs = require('fs');
var app = express();
var session = require('express-session');
var mongoose = require('./config/db');
var hash = require('./helpers/hash');
var User = require('./models/User');

/*var u = {
  username: 'alexis',
  password: hash('test123')
};

User(u).save(function(err, user){
  console.log(user);
});*/

app.use(session({secret:'azertyuiop'}));

app.set('view engine', 'ejs');
app.use(require('./helpers/date'));
app.use('/public', express.static(__dirname + '/public'));

app.use('/', require('./controllers'));

app.all("*", function(req, res){
  res.render('404.ejs');
});

app.listen(1337, function() {
  console.log('App running on port 1337');
});
