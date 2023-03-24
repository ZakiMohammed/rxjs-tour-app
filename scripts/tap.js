// const rxjs = require('rxjs');

const interval$ = rxjs.interval(100);

const intervalSub = interval$
  .pipe(
    rxjs.tap(value => {
      if (value >= 20) {
        intervalSub.unsubscribe();
      }
    })
  )
  .subscribe(value => {
    console.log(`%c⏱️ ${value}`, `color: ${db.colors[value]}`);
  });
