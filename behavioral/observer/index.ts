import { BaseObserver } from './observer';
import { BaseSubject } from './subject';
import utils from '../../utils';

class Subject extends BaseSubject {
  // Override
  notify() {
    for (const observer of this.observers) {
      utils.printWithTime(`Notifying ${observer}`);
      observer.update(this);
    }
  }
}

class Observer extends BaseObserver {
  update(subject: BaseSubject): void {
    utils.printWithTime(`Receiving notification from ${subject}`);
  }
}

const subject = new Subject();

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.attach(observer1);
subject.attach(observer2);

subject.notify();

subject.detach(observer1);

subject.notify();

subject.clear();
