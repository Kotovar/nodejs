import path from 'path';

const filePath = '/Users/dmitr/Desktop/node/index.js';
const textPath = '/Users/dmitr/Desktop/file.txt';
const relativePath = './node/movie.mov';
const directoryPath = './node/subfolder';

console.log(path.isAbsolute(filePath)); // true
console.log(path.isAbsolute(relativePath)); // false

console.log(path.basename(filePath)); // index.js
console.log(path.basename(directoryPath)); // subfolder

console.log(path.dirname(filePath)); // /Users/dmitr/Desktop/node
console.log(path.dirname(directoryPath)); // ./node

console.log(path.resolve(relativePath)); // /d/code/node/07-path

console.log(path.extname(textPath)); // .txt

console.log(path.parse(filePath));

const parsedPath = path.parse(filePath);

console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`)); // \Users\dmitr\Desktop\node\renamed-index.mjs
