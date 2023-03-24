# Touring vanilla RxJS

On a journey to explore RxJS capabilities without any flavor added.

## Initial Setup

Run Commands:
```
npm i rxjs
```

HTML:
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Home | RxJS</title>
  </head>
  <body>
    <h1>Hello! RxJS 😎</h1>
    
    <script src="./node_modules/rxjs/dist/bundles/rxjs.umd.min.js"></script>
    <script src="./src/index.js"></script>
  </body>
</html>
```

JavaScript:
```
const numbers$ = rxjs.from([1, 2, 3, 4, 5]);

numbers$.subscribe(num => console.log(num));
```

## Exploring Operators

- from
- map
- fromEvent