//  Old way of creating promise
const promiseFn = new Promise((resolve, reject) => {
  try {
    resolve();
  } catch (error) {
    reject(error);
  }
});
//  New way of creating promise
const { promise, resolve, reject } = promise.withResolvers();

// There is one example called Promise.any which is even first promise failed, second promise pass and will return pass eventually ~
const rejectOne = new Promise((resolve, reject) => reject("Nope"));
const resolveOne = new Promise((resolve, reject) => resolve("Yeah"));
Promise.any([rejectOne, resolveOne]); // Promise {<fulfilled>: 'Yeah'}

Promise.race([rejectOne, resolveOne]); // will always return the first promise result ~
