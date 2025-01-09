const fs = require('fs');
const dns = require('dns');

function info(text) {
  console.log(text, performance.now().toFixed(2));
}

console.log('Начало программы');

setTimeout(() => info('Таймаут 1'));
setTimeout(() => {
  process.nextTick(() => info('nextTick 2'));
  info('Таймаут 2');
}, 100);

fs.writeFile('./test.tsx', 'Hello Node.js', () =>
  info('Закончена запись в файл')
);

Promise.resolve().then(() => info('Промис 1'));

process.nextTick(() => info('nextTick 1'));

setImmediate(() => info('setImmediate'));

dns.lookup('google.com', (err, address, family) => {
  info('ДНС 1 - google.com');
});

let count = 0;

const intervalId = setInterval(() => {
  info(`setInterval ${(count += 1)}`);

  if (count === 2) {
    clearInterval(intervalId);
  }
}, 50);

console.log('Конец программы');
