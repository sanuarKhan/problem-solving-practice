const createCounter = (init) => {
  let currentVal = init;
  return {
    increment: () => {
      currentVal += 1;
      return currentVal;
    },
    decrement: () => {
      currentVal -= 1;
      return currentVal;
    },
    reset: () => {
      currentVal = init;
      return currentVal;
    },
  };
};

const counter = createCounter(0);

console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.reset());
