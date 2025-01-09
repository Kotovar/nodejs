import fs from 'fs';
import path from 'path';

if (!process.argv[2] || !process.argv[3]) {
  console.log('Нужно указать название файла и количество строк');
  process.exit(0);
}

const fileName = process.argv[2];
const linesQty = parseInt(process.argv[3]);

if (isNaN(linesQty)) {
  console.log('Нужно указать число строк');
  process.exit(0);
}

const writeStream = fs.createWriteStream(path.join('./files', fileName));

console.log('Start', performance.now());

for (let i = 1; i <= linesQty; i++) {
  writeStream.write(`This is line number ${i}\n`);
}

console.log('End', performance.now());
setTimeout(() => console.log('Timeout', performance.now()), 0);

writeStream.end(() => {
  console.log(`File ${fileName} was created!`);
});
