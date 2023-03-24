// const rxjs = require('rxjs');

// rxjs.fetch
//   .fromFetch('https://jsonplaceholder.typicode.com/postss')
//   .pipe(
//     rxjs.switchMap(response => {
//       return response.ok
//         ? response.json()
//         : rxjs.of({
//             error: true,
//             status: response.status,
//             message: `Error ${response.status}`,
//           });
//     })
//   )
//   .subscribe({
//     next: response => {
//       console.log(response);
//     },
//     error: error => {
//       console.log(error);
//     },
//   });

// const fetch$ = (input, init) => {
//   const fetchPromise = fetch(input, init)
//     .then(res => {
//       if (res.ok) return res.json();
//       throw res;
//     })
//     .then(data => data)
//     .catch(error => error);
//   return rxjs.from(fetchPromise);
// };

const fetch$$ = (input, init) => {
  return new rxjs.Observable(observer => {
    fetch(input, init)
      .then(res => {
        if (res.ok) return res.json();
        throw res;
      })
      .then(data => {
        observer.next(data);
        observer.complete();
      })
      .catch(error => {
        observer.error(error);
      });
  });
};

fetch$$('https://jsonplaceholder.typicode.com/postss').subscribe({
  next: response => {
    console.log(response);
  },
  error: error => {
    console.log(error);
  },
});
