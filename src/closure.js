// Complete the following functions.

const counter = () => {
  let count = 1;
  function increments() {
    return count++;
  }
  return increments;
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
};

const counterFactory = () => {
  let count = 0;

  return {
    increment: () => {
      return ++count;
    },
    decrement: () => {
      return --count;
    },
  };
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const limitFunctionCallCount = (cb, n) => {
  let count = n;

  return () => {
    if (count > 0) {
      --count;
      return cb();
    }
    return null;
  };
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  const cache = {};
  return (...args) => {
    const keys = Object.keys(cache);
    const argsString = args.toString();
    if (keys.indexOf(argsString) !== -1) {
      return cache[argsString];
    }
    const result = cb(...args);
    cache[argsString] = result;
    return result;
  };

  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
