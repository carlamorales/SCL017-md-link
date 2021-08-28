const fs = require('fs');
const givenPathToDirectory = process.argv[2];

fs.readdir(givenPathToDirectory, (err, files) => {
  if (err) {
    console.log(err);
    return
  }
  files.forEach(file => {
    console.log(file);
  });
});
