import utils from '../../utils';

export default class Singleton {
  private static _instance: Singleton;
  private static _id: number;

  private constructor() {
    console.log('Creating singleton...');
    Singleton._id = utils.generateId();
  }

  static get instance(): Singleton {
    // could be replaced by getInstance()
    if (!Singleton._instance) Singleton._instance = new Singleton();
    return Singleton._instance;
  }

  static get id(): number {
    return Singleton._id;
  }
}
