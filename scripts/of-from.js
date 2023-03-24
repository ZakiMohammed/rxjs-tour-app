// const rxjs = require('rxjs')

console.group('of operator:');

const fullName = { firstName: 'Allen', middleName: 'M.', lastName: 'Walker' };
const fullName$ = rxjs.of(fullName);
fullName$.subscribe(name => console.log(name))

console.groupEnd();

console.group('from operator:');

console.log('Array:');

const numbers = [1, 2, 3, 4, 5];
const numbers$ = rxjs.from(numbers);
numbers$.subscribe(number => console.log(number));

console.log('Promise');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      status: 1,
      message: 'Operation completed',
    });
  }, 2000);
});
const promise$ = rxjs.from(promise);
promise$.subscribe(data => console.log(data));

console.groupEnd();
