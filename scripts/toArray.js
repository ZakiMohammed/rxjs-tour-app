// const rxjs = require('rxjs');

console.log('of operator');

const fullName$ = rxjs.of('Allen', 'M.', 'Walker');
fullName$.pipe(rxjs.toArray()).subscribe(name => console.log(name));

console.log('from operator');

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Allen' },
  { id: 3, name: 'Smith' },
  { id: 4, name: 'Paul' },
  { id: 5, name: 'Dominic' },
];
const users$ = rxjs.from(users);
users$.pipe(rxjs.toArray()).subscribe(user => console.log(user));

console.log('interval operator');

const interval$ = rxjs.interval(500);
interval$.pipe(rxjs.take(5), rxjs.toArray()).subscribe(value => {
  console.log(value);
});
