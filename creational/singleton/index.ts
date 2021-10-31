import Singleton from './singleton';

const obj1 = Singleton.instance;
const obj2 = Singleton.instance;

for (let i = 0; i < 10; ++i) {
  // Singleton constructor will not be called :)
  const _ = Singleton.instance;
}

console.log(`Are obj1 and obj2 the same object? ${obj1 === obj2}`);
