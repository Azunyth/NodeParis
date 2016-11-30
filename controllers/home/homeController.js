var router = require('express').Router();
var bodyParser = require('body-parser');
var db = require('../../config/db');
var Tweet = require('../../models/Tweet');

var urlencoded = bodyParser.urlencoded({ extended: false });

router.route(['/', '/index'])
  .get(function(req, res){
    /*function sortByDate(t1, t2) {
      return t2.created_at - t1.created_at;
    }*/

    Tweet.getTimeline(function(err, twts){
      res.render('index.ejs', { tweets : twts, username: req.session.username });
    });
  })
  .post(urlencoded, function(req, res){
    if(!req.session.username) {
      req.session.username = req.body.username;
    }

    var t = {
      username: req.body.username,
      tweet: req.body.tweet
    };

    Tweet(t).save();

    res.redirect('/');
  });

module.exports = router;
