// const rxjs = require('rxjs');

const db = {
  users: [
    { id: 1, name: 'Allen' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Martin' },
  ],
};

const fetchUserById = id => {
  return new rxjs.Observable(observer => {
    setTimeout(_ => {
      const results = db.users.find(i => i.id === id);
      if (results) {
        observer.next(results);
        observer.complete();
      } else {
        observer.error(new Error('Not found'));
      }
    }, 2000);
  });
};

fetchUserById(100).subscribe({
  next: user => console.log(user),
  error: error => console.error(error),
  complete: () => console.log('completed'),
});
