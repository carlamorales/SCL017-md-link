// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const path = require('path');
const resolve = require('path').resolve;
let givenPath = process.argv[2];
givenPath = resolve(givenPath);
const validate = process.argv[3] === '--validate' || process.argv[4] === '--validate';
const stats = process.argv[3] === '--stats' || process.argv[4] === '--stats';

const readFilesAndFolders = () => {
  fs.lstat(givenPath, (err, stats) => {
    if (err) {
      return console.log(err);
    }
    if (stats.isFile()) {
      if (isItMd()) {
        console.log('Estás en un archivo. Contiene los siguientes links:')
        getLinksInMdFile();
      } else {
        console.log('Estás en un archivo, pero su extensión no es la indicada');
      }
    } else if (stats.isDirectory()) {
      console.log('Estás en un directorio. Contiene los siguientes archivos:');
      getFilesInFolder();
    }
  })
};

const isItMd = () => {
  const fileExtension = path.extname(givenPath);
  const mdExtension = '.md';
  return fileExtension === mdExtension;
};

const getLinksInMdFile = () => {
  fs.readFile(givenPath, 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }
    const foundLinks = findLinks(data);
    console.log(foundLinks);
  });
};

const findLinks = (dataContent) => {
  const linksRegExp = /(?<!\!)\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g;
  const foundMatches = dataContent.matchAll(linksRegExp);
  const linksList = [];
  for (const match of foundMatches) {
    linksList.push({
      href: match[2],
      text: match[1],
      file: givenPath,
    })
    console.log(givenPath + ' ' + match[2] + ' ' + match[1]);
  }
  return linksList;
};

const getFilesInFolder = () => {
  fs.readdir(givenPath, (err, files) => {
    if (err) {
      return console.log(err);
    }
    files.forEach(file => {
      console.log(file);
    });
  });
};

readFilesAndFolders(givenPath);
