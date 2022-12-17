/* Events module in Node ?
Node.js has a built-in module, called
"Events", where you can create-, fire-,
and listen for- your own events.
*/

const EventsEmitter = require('events');
const event = new EventsEmitter();

// event.on('sayMyName', ()=>{
//     console.log("Nawaz");
// });
// event.on('sayMyName', ()=>{
//     console.log("Danish");
// });
// event.on('sayMyName', ()=>{
//     console.log("Mr");
// });

// event.emit("sayMyName");

event.on("checkPage", (sc, msg)=>{
    console.log(`Status Code is ${sc} and the page is ${msg}`);
})

event.emit("checkPage", 200, "ok");