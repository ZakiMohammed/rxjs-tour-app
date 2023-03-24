// const rxjs = require('rxjs');

const employees$ = rxjs.from(db.employees);

console.log('Get all salesman employees');
employees$
  .pipe(
    rxjs.filter(i => i.job === 'Salesman'),
    rxjs.toArray()
  )
  .subscribe(employee => console.log(employee));

console.log('Get employees having salaries greater than 40K');
employees$
  .pipe(
    rxjs.filter(i => i.salary > 40000),
    rxjs.toArray()
  )
  .subscribe(employee => console.log(employee));

console.log('Get employees having salaries greater than 50K and from the research department');
employees$
  .pipe(
    rxjs.filter(i => i.salary > 50000 && i.department === 'Research'),
    rxjs.toArray()
  )
  .subscribe(employee => console.log(employee));
