const path = require('path');

console.log(path.sep);

const filePath = path.join('\content', 'subfolder', 'text.txt');
console.log(filePath)

const baseName = path.basename(filePath);
console.log(baseName)

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')     //location of a file or directory specified from the root directory
console.log(absolutePath)