import { Transform } from 'stream';
import fs from 'fs';

// const filePath = './files/stdin-dump.txt';
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(writeStream);

const upperCaseStream = new Transform({
  transform(chunk, encoding, cb) {
    const upperCased = chunk.toString().toUpperCase();
    cb(null, upperCased);
  },
});

const reverseStream = new Transform({
  transform(chunk, encoding, cb) {
    const array = [...chunk.toString()];
    const lastChar = array.pop();
    const reversedCased = array.reverse().concat(lastChar).join('');
    cb(null, reversedCased);
  },
});

process.stdin.pipe(reverseStream).pipe(upperCaseStream).pipe(process.stdout);
