import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('myEvent', () => {
  console.log('firstEvent');
});

myEmitter.on('myEvent', () => {
  console.log('secondEvent');
});

setTimeout(() => {
  myEmitter.emit('myEvent');
}, 1000);

myEmitter.setMaxListeners(25);
console.log(myEmitter.getMaxListeners());

myEmitter.on('otherEvent', () => {
  console.log('otherEvent');
});

console.log(myEmitter.eventNames());
