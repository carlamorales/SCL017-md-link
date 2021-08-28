const fs = require('fs');
const givenPath = process.argv[2];

fs.readFile(givenPath, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
