// const rxjs = require('rxjs');

fetchAsOperator('https://jsonplaceholder.typicode.com/posts/1').subscribe({
  next: response => console.log('fetchAsOperator', response),
  error: error => console.log('fetchAsOperator', error),
});

fetchAsPromise('https://jsonplaceholder.typicode.com/posts/2').subscribe({
  next: response => console.log('fetchAsPromise', response),
  error: error => console.log('fetchAsPromise', error),
});

fetchAsObservable('https://jsonplaceholder.typicode.com/posts/3').subscribe({
  next: response => console.log('fetchAsObservable', response),
  error: error => console.log('fetchAsObservable', error),
});
