import fs from 'fs/promises';

fs.writeFile('./firstFile.txt', 'First file text')
  .then(() => console.log('Файл был записан'))
  .then(() => fs.appendFile('./firstFile.txt', '\nЕщё линия'))
  .then(() => console.log('Файл был обновлён'))
  .then(() => fs.rename('./firstFile.txt', './renamedFile.txt'))
  .then(() => console.log('Файл был переименован'))
  .catch(err => console.log(err));
