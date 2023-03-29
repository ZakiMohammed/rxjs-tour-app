// const rxjs = require('rxjs');

fetchAsOperator('https://jsonplaceholder.typicode.com/posts')
  .pipe(
    // rxjs.retryWhen(err =>
    //   err.pipe(
    //     rxjs.delay(1000),
    //     rxjs.scan(retryCount => {
    //       if (retryCount < 10) {
    //         retryCount = retryCount + 1;
    //         console.log(`Retrying: ${retryCount}`);
    //         return retryCount;
    //       }
    //       throw err;
    //     }, 0)
    //   )
    // ),
    rxjs.retry({
      count: 10,
      delay: (error, retryCount) => {
        console.log(`Retrying: ${retryCount}`);
        return rxjs.timer(2000);
      },
    })
  )
  .subscribe({
    next: response => console.log(response),
    error: error => console.log(error),
  });
