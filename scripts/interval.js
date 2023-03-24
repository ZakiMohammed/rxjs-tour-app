// const rxjs = require('rxjs');

const interval$ = rxjs.interval(500);

const intervalSub = interval$.subscribe(value => {
  if (value >= 5) {
    intervalSub.unsubscribe();
  }
  console.log(`⏱️ ${value}`)
})