var fs = require('fs');
/*
var read = fs.readFileSync('read.txt', 'utf8');

fs.writeFileSync('write.txt', read);
console.log(read);

fs.readFile('read.txt', 'utf8', function(err, data){
  fs.writeFile('writeAsync.txt', data, function(err) {
    console.log("Copie terminée");
  });
});*/

/*fs.mkdir('test');

fs.rmdir('test');

fs.unlink('write.txt');

fs.readdir('test', function(files){

});*/

var readStream = fs.createReadStream('read.txt', 'utf8');
var writeStream = fs.createWriteStream('write.txt');

readStream.pipe(writeStream);
/*
readStream.on('data', function(chunk) {
  writeStream.write(chunk);
});*/
