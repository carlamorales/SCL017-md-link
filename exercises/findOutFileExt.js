const path = require('path');
const givenPathToFile = process.argv[2];

const fileExtension = path.extname(givenPathToFile);
console.log(fileExtension);
