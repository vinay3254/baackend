// simple expansion//

/*Call Stack → Executes code
Web APIs / Node APIs → Handle async tasks
Callback Queue → Stores completed tasks
Event Loop → Moves tasks to stack when free*/

//Example of event loop in action//
console.log("Start");

setTimeout(() => {
  console.log("Inside Timeout");
}, 0);

console.log("End");