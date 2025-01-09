import EventEmitter from 'events';
import fs from 'fs';

const fileEmitter = new EventEmitter();

const filePath = './firstFile.txt';

fileEmitter.on('writeComplete', () => {
  console.log(`Файл ${filePath} был записан`);
  fs.appendFile(filePath, '\nЕщё линия', () => {
    fileEmitter.emit('appendComplete');
  });
});

fileEmitter.on('appendComplete', () => {
  console.log(`Файл ${filePath}  был обновлён`);
  fs.rename(filePath, './renamedFile.txt', () => {
    fileEmitter.emit('renameComplete');
  });
});

fileEmitter.on('renameComplete', () => {
  console.log(`Файл ${filePath}  был переименован`);
});

fs.writeFile(filePath, 'First file text', () => {
  fileEmitter.emit('writeComplete');
});
