// const rxjs = require('rxjs');

const timer$ = rxjs.timer(1000, 500);

const timerSub = timer$.subscribe(value => {
  if (value >= 5) {
    timerSub.unsubscribe();
  }
  console.log(`⏱️ ${value}`)
})