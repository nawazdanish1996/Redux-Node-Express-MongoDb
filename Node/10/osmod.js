/*
help doc:
https://nodejs.org/dist/latest-v18.x/docs/api/os.html
*/

import * as os from "os";

console.log(os.type());  // Windows_NT

// console.log(os.tmpdir()); // temporary file

// console.log(os.platform()); // win 32

// console.log(os.cpus()); // CPU core

// console.log(os.hostname()); // DESKTOP-T0V4TR8

// const osBit = os.arch();
// console.log("Operating System Bit: "+ osBit);  // x64 bit

// const freeMemory = os.freemem();
// console.log("Free Memory: "+freeMemory); // 840810496 Free Memory
// console.log(`Free memory in GB: ${freeMemory / 1024 / 1024 / 1024}`);

// const totalMemory = os.totalmem();
// console.log("Total Memory: "+totalMemory); // 840810496 Free Memory
