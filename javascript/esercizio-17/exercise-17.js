function calculate() {
  let container = 0;
  return {
    add(value) {
      container += value;
      return this;
    },
    multiply(value) {
      container * value;
      return this;
    },
    sub(value) {
      container - value;
      return this;
    },
    divide(value) {
      container / value;
      return this;
    },
    printResult() {
      console.log(container);
    },
  };
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
