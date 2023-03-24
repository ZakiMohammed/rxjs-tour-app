// const rxjs = require('rxjs');

const employees$ = rxjs.from(db.employees);

console.log('employee names');
employees$
  .pipe(rxjs.pluck('name'), rxjs.toArray())
  .subscribe(name => console.log(name));

console.log('employee city');
employees$
  .pipe(rxjs.pluck('address', 'city'), rxjs.toArray())
  .subscribe(city => console.log(city));
