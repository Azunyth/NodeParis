var router = require('express').Router();
var Tweet = require('../../models/Tweet');

router.get('/:id', function(req, res){
  var _id = req.params.id;

  var re = new RegExp('[a-zA-Z0-9]{24}');
  if(!_id.match(re)) {
    res.redirect('/');
  }

  /*var searchTweet = function(id) {
    return function(elem) {
      return elem.id == id;
    }
  }*/

  Tweet.findById(_id, function(err, tweet){
    if(tweet) {
      res.render('tweet.ejs', tweet);
    } else {
      res.redirect('/');
    }
  });
});


module.exports = router;
