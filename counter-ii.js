const createCounter = function (init) {
  return {
    increment: () => {
      return init + 1;
    },
    decrement: () => {
      return init - 1;
    },
    reset: () => {
      return init;
    },
  };
};

const counter = createCounter(0);

console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.reset());
