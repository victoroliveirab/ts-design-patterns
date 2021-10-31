export interface Cloneable {
  clone(): this;
}

export abstract class Prototype implements Cloneable {
  private copy(obj: any): any {
    // Adapted from: https://github.com/angus-c/just/blob/master/packages/collection-clone/index.js
    if (typeof obj == 'function') {
      return obj;
    }
    const result: any = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      const value = obj[key];
      const type = {}.toString.call(value).slice(8, -1);
      if (type == 'Array' || type == 'Object') {
        result[key] = this.copy(value);
      } else if (type == 'Date') {
        result[key] = new Date(value.getTime());
      } else {
        result[key] = value;
      }
    }
    return result;
  }
  clone(): this {
    return this.copy(Object.create(this));
  }
}
