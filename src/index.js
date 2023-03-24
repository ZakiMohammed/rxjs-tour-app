// const rxjs = require('rxjs');

const numbers$ = rxjs.from([1, 2, 3, 4, 5]);

console.group('Numbers:');
numbers$.subscribe(num => console.log(num));
console.groupEnd();

const squaredNumbers$ = numbers$.pipe(rxjs.map(num => num * num));

console.group('Square:');
squaredNumbers$.subscribe(num => console.log(num));
console.groupEnd();

const documentClick$ = rxjs.fromEvent(document, 'click');

documentClick$
  .pipe(rxjs.scan(count => count + 1, 0))
  .subscribe((count) => console.log(`Clicked! ${count} times`));
