const path = require('path');
const filePath = process.argv[2];

const isItMd = () => {
  const fileExt = path.extname(filePath);
  const markDownExt = '.md';
  if (fileExt === markDownExt) {
    console.log('Este es un archivo markdown');
  } else {
    console.log('Este no es un archivo markdown');
  }
};

isItMd();