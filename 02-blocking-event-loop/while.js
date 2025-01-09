let isRunning = true;

setTimeout(() => (isRunning = false), 10);

while (isRunning) {
  console.log('while is running');
}
