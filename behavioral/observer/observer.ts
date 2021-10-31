import { BaseSubject } from './subject';

abstract class BaseObserver {
  name: string;
  abstract update(subject: BaseSubject): void;

  constructor(name?: string) {
    this.name = name || new Date().valueOf().toString();
  }

  toString(): string {
    return `Observer [${this.name}]`;
  }
}

export { BaseObserver };
