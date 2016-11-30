var mongoose = require('../config/db');

var tweetSchema = new mongoose.Schema({
  tweet: String,
  username: String,
  created_at: { type: Date, default: Date.now() }
});

tweetSchema.statics.getTimeline = function(cb) {
  return Tweet.find({})
        .sort({created_at: -1})
        .exec(cb);
}

var Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
