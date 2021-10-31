import { Memento } from './memento';
import { BaseOriginator } from './originator';

class Caretaker<T> {
  private originator: BaseOriginator<T>;
  private _state: Memento<T>[];

  constructor(originator: BaseOriginator<T>) {
    this._state = [];
    this.originator = originator;
  }

  store(): void {
    this._state.push(this.originator.save());
  }

  undo(): void {
    const memento = this._state.pop();
    if (memento) this.originator.restore(memento);
  }

  get state(): Memento<T>[] {
    return this._state;
  }

  get current(): Memento<T> {
    return this._state[this._state.length - 1];
  }
}

export { Caretaker };
