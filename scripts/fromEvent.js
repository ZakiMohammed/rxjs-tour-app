// const rxjs = require('rxjs')

const btnAdd = document.getElementById('btnAdd');
const event$ = rxjs.fromEvent(btnAdd, 'click');

event$.subscribe(event => console.log(event));
