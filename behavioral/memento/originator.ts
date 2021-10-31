import { Memento } from './memento';

abstract class BaseOriginator<T> {
  private _state: T;

  constructor(state: T) {
    this._state = state;
  }

  save(): Memento<T> {
    return new Memento(this._state);
  }

  restore(memento: Memento<T>): void {
    this._state = memento._state;
  }

  set state(state: T) {
    this._state = state;
  }
}

export { BaseOriginator };
