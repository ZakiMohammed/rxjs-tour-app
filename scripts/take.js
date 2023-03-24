// const rxjs = require('rxjs');

const employees$ = rxjs.from(db.employees);

console.log('take first 5');
employees$
  .pipe(rxjs.take(5), rxjs.toArray())
  .subscribe(employee => console.log(employee));

console.log('take last 5');
employees$
  .pipe(rxjs.takeLast(5), rxjs.toArray())
  .subscribe(employee => console.log(employee));

const fireCondition1 = () => {
  console.log('condition 1: timer');
  const timer$ = rxjs.timer(3000);
  const interval$ = rxjs.interval(1000);
  interval$.pipe(rxjs.takeUntil(timer$)).subscribe(value => {
    console.log(`⏱️ ${value}`);
  });
};

const fireCondition2 = () => {
  console.log('condition 2: event');
  const event$ = rxjs
    .fromEvent(document, 'click')
    .pipe(rxjs.tap(value => console.log('event:', value)));
  const interval$ = rxjs.interval(1000);
  interval$.pipe(rxjs.takeUntil(event$)).subscribe(value => {
    console.log(`⌚ ${value}`);
  });
};

const fireCondition3 = () => {
  console.log('condition 3: subject');
  const btnAdd = document.getElementById('btnAdd');
  const subjectAdd = new rxjs.Subject();
  const add$ = subjectAdd.asObservable().pipe(rxjs.tap(value => console.log('subject:', value)));

  btnAdd.addEventListener('click', () => {
    subjectAdd.next('added');
  })

  const interval$ = rxjs.interval(1000);
  interval$.pipe(rxjs.takeUntil(add$)).subscribe(value => {
    console.log(`➕ ${value}`);
  });
};

fireCondition3();
