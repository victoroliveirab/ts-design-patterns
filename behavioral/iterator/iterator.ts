// Typescript defines an Iterator that can be used directly
// However, for study purposes, we will not use it **directly**

export interface MyIterator<T> {
  makeIterator(): Iterator<T>;
}
