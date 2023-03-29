// const rxjs = require('rxjs')

const error = res => ({
  ok: res.ok,
  type: res.type,
  status: res.status,
  message: `Error: ${res.status} ${res.statusText}`.trim(),
});
const error$ = res => rxjs.of(error(res));

const fetchAsOperator = (input, init) => {
  return rxjs.fetch
    .fromFetch(input, init)
    .pipe(rxjs.switchMap(res => (res.ok ? res.json() : error$(res))));
};

const fetchAsPromise = (input, init) => {
  const fetchPromise = fetch(input, init)
    .then(res => {
      if (res.ok) return res.json();
      throw res;
    })
    .then(data => data)
    .catch(err => error(err));
  return rxjs.from(fetchPromise);
};

const fetchAsObservable = (input, init) => {
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
      .catch(err => {
        observer.error(error(err));
      });
  });
};
