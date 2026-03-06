console.log("=== ASYNC JAVASCRIPT EXAMPLE ===");

// Callback Example
function greetUser(callback) {
  setTimeout(() => {
    callback("Hello User (Callback)");
  }, 1000);
}

greetUser((message) => {
  console.log(message);
});

// Promise Example
const promiseExample = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello User (Promise)");
  }, 1500);
});

promiseExample.then((message) => {
  console.log(message);
});

// Async/Await Example
function asyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello User (Async/Await)");
    }, 2000);
  });
}

async function runAsync() {
  const message = await asyncFunction();
  console.log(message);
}

runAsync();