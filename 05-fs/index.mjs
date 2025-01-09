import fs from 'fs';

fs.writeFile('./firstFile.txt', 'First file text', err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Файл был записан');
    fs.appendFile('./firstFile.txt', '\nЕщё линия', err => {
      if (err) {
        console.log(err);
      } else {
        console.log('Файл был обновлён');
        fs.rename('./firstFile.txt', './renamedFile.txt', err => {
          if (err) {
            console.log(err);
          } else {
            console.log('Файл был Переименован');
          }
        });
      }
    });
  }
});
