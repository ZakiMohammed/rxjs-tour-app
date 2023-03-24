// const rxjs = require('rxjs')

const fetch$ = (input, init) => {
  return rxjs.from(fetch(input, init));
}