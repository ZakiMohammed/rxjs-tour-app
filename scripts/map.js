// const rxjs = require('rxjs');

console.log('employees');
const employees$ = rxjs.from(db.employees);
employees$
  .pipe(
    rxjs.map(({ id, name, salary }) => ({ id, name, annual: salary * 12 })),
    rxjs.toArray()
  )
  .subscribe(employee => console.log(employee));

console.log('with interval');
const interval$ = rxjs.interval(500);
const intervalSub = interval$
  .pipe(
    rxjs.map(value => `⏱️ ${value}`),
    rxjs.map(value => `⏳ ${value}`),
    rxjs.map(value => `⏳ ${value}`),
    rxjs.map(value => `🌍 ${value}`),
    rxjs.map(value => `🌎 ${value}`)
  )
  .subscribe(value => console.log(value));

setTimeout(() => {
  intervalSub.unsubscribe();
}, 3000);
