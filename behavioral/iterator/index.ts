import { MyIterator } from './iterator';
import utils from '../../utils';

class Fibonacci implements MyIterator<number> {
  private numbers: number[];
  private index: number;

  constructor() {
    this.numbers = [0, 1];
    this.index = 1;
  }

  *makeIterator() {
    while (true) {
      const sum = this.numbers[this.index - 1] + this.numbers[this.index++];
      this.numbers.push(sum);
      yield sum;
    }
  }
}

const fib = new Fibonacci();
const iter = fib.makeIterator();

for (let i = 0; i < 20; ++i) {
  const { done, value } = iter.next();
  utils.printWithTime(`${value} - done? ${done}`);
}

iter.return(); // will finish the generator

const { done, value } = iter.next(); // next will return undefined
utils.printWithTime(`${value} - done? ${done}`);
