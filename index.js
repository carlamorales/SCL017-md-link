// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const path = require('path');
const resolve = require('path').resolve;
let givenPath = process.argv[2];
givenPath = resolve(givenPath);
console.log(givenPath);

const isItFileOrFolder = () => {
  fs.lstat(givenPath, (err, stats) => {
    if (err) {
      return console.log(err);
    }
    if (stats.isFile()) {
      if (isItMd()) {
        console.log('Estás en un archivo. Contiene los siguientes links:')
        readAfile();
      } else {
        console.log('Estás en un archivo, pero su extensión no es la indicada');
      }
    } else if (stats.isDirectory()) {
      console.log('Estás en un directorio. Contiene los siguientes archivos:');
      readADir();
    }
  })
};

const isItMd = () => {
  const fileExtension = path.extname(givenPath);
  const mdExtension = '.md';
  return fileExtension === mdExtension;
};

const readAfile = () => {
  fs.readFile(givenPath, 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
};

const readADir = () => {
  fs.readdir(givenPath, (err, files) => {
    if (err) {
      return console.log(err);
    }
    files.forEach(file => {
      console.log(file);
    });
  });
};

isItFileOrFolder(givenPath);