var fs = require('fs')
fs.readFile(__dirname+'/info.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
