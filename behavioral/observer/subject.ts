import { BaseObserver } from './observer';

abstract class BaseSubject {
  name: string;
  observers: Set<BaseObserver>;

  constructor(name?: string) {
    this.name = name || 'Subject';
    this.observers = new Set<BaseObserver>();
  }

  attach(observer: BaseObserver): void {
    this.observers.add(observer);
  }

  detach(observer: BaseObserver): void {
    this.observers.delete(observer);
  }

  clear(): number {
    const length = this.observers.size;
    this.observers.clear();
    return length;
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  toString(): string {
    return `[${this.name}]`;
  }
}

export { BaseSubject };
