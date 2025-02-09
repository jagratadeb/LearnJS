// Promises in JavaScript

// Creating a promise
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Promise resolved!");
  } else {
    reject("Promise rejected.");
  }
});

// Handling a promise
promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// Chaining promises
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  });
};

fetchData()
  .then((data) => {
    console.log(data);
    return "Processing data...";
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// Promise.all
const promise1 = Promise.resolve("Promise 1 resolved");
const promise2 = Promise.resolve("Promise 2 resolved");

Promise.all([promise1, promise2])
  .then((messages) => {
    console.log(messages); // ["Promise 1 resolved", "Promise 2 resolved"]
  })
  .catch((error) => {
    console.error(error);
  });

// Promise.race
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, "Promise 3 resolved"));
const promise4 = new Promise((resolve) => setTimeout(resolve, 200, "Promise 4 resolved"));

Promise.race([promise3, promise4])
  .then((message) => {
    console.log(message); // Promise 3 resolved
  })
  .catch((error) => {
    console.error(error);
  });
