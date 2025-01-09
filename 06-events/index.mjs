import { EventEmitter } from 'events';

const timeoutListener = seconds => {
  console.log(`timeout событие через ${seconds} секунд !`);
};

const myEmitter = new EventEmitter();

myEmitter.on('timeout', timeoutListener);

// myEmitter.emit('timeout');

setTimeout(() => myEmitter.emit('timeout', 1), 1000);
setTimeout(() => myEmitter.emit('timeout', 2), 2000);

myEmitter.once('singleEvent', () => {
  console.log('Однократное событие');
});

setTimeout(() => myEmitter.emit('singleEvent'), 3000);
setTimeout(() => myEmitter.emit('singleEvent'), 4000);

setTimeout(() => myEmitter.off('timeout', timeoutListener), 3000);
setTimeout(() => myEmitter.emit('timeout', 4), 4000);
