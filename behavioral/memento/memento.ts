class Memento<T> {
  _state: T;
  constructor(state: T) {
    this._state = state;
  }

  protected get state(): T {
    return this._state;
  }

  toString(): string {
    return `${this._state}`;
  }
}

export { Memento };
