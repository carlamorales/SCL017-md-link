const path = require('path');
const firstPartOfPath = process.argv[2];
const secondPartOfPath = process.argv[3];
const thirdPartOfPath = process.argv[4];

const resultingPath = path.join(firstPartOfPath, secondPartOfPath, thirdPartOfPath);
console.log(resultingPath);
