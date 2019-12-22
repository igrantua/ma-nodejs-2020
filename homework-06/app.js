// #!/usr/bin/env node
const os = require('os');

const RATE = process.env.RATE || 1000;
const LIMIT = process.env.LIMIT || 300;
const COLOR = process.env.COLOR !== 'false';

let previouslyUsedMemory = 0;
const msg = `!!! ATTENTION: Available memory is under the defined limit !!!`;

const memoryLog = () => {
  console.clear();
  const totalMemory = os.totalmem() / 1024 / 1024;
  const freeMemory = os.freemem() / 1024 / 1024;
  const usedMemory = totalMemory - freeMemory;
  const deltaMemory = usedMemory - previouslyUsedMemory;
  previouslyUsedMemory = usedMemory;

  if (COLOR) {
    console.log(`Total system memory: ${totalMemory.toFixed()} MB`);

    let colorFreeMemory;
    if (freeMemory < LIMIT) {
      colorFreeMemory = `\x1b[31m${freeMemory.toFixed(3)}\x1b[0m`;
      console.log(`Free memory available: ${colorFreeMemory} MB`);
    } else {
      console.log(`Free memory available: ${freeMemory.toFixed(3)} MB`);
    }

    console.log(`Allocated memory: ${usedMemory.toFixed(3)} MB`);

    let colorDelta;
    if (deltaMemory <= 0) {
      colorDelta = `\x1b[31m${deltaMemory.toFixed(3)}\x1b[0m`;
    } else {
      colorDelta = `\x1b[32m${deltaMemory.toFixed(3)}\x1b[0m`;
    }
    console.log(`Delta for previous allocated memory value: ${colorDelta} MB`);
    if (freeMemory < LIMIT) {
      console.log(`\x1b[31m${msg}\x1b[0m`);
    }
  } else {
    console.log(`Total system memory: ${totalMemory.toFixed()} MB`);
    console.log(`Free memory available: ${freeMemory.toFixed(3)} MB`);
    console.log(`Allocated memory: ${usedMemory.toFixed(3)} MB`);
    console.log(`Delta for previous allocated memory value: ${deltaMemory.toFixed(3)} MB`);
    if (freeMemory < LIMIT) {
      console.log(`${msg}`);
    }
  }
};

setInterval(() => memoryLog(), RATE);
