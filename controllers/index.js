var router = require('express').Router();
var fs = require('fs');
var routes = require('../config/route');

var boot = function(folder) {
  var currentFolder = (folder == __dirname) ? __dirname : __dirname + '\\' + folder;
  fs.readdir(currentFolder, function(err, files) {
    files.forEach(function(file){
      if(!(folder == __dirname && file == 'index.js')) {
        if(fs.lstatSync(currentFolder + '/' +file).isDirectory()) {
          boot(file);
        }else {
          router.use(routes[folder], require('./' + folder + '/' + file))
        }
      }
    });
  });
}

boot(__dirname);

/*router.use('/', require('./home/homeController'));
router.use('/tweet', require('./tweet/tweetController'));
router.use('/auth', require('./auth/authController'));*/

module.exports = router;
