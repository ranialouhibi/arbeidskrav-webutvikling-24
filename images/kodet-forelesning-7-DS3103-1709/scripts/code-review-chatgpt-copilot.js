// https://www.bing.com/chat?q=Microsoft+Copilot&FORM=hpcodx

const arr = [
    { a: 'Toyota', b: 'Corolla', c: 2020, d: 'blue' },
    { a: 'Honda', b: 'Civic', c: 2019, d: 'black' },
    { a: 'Ford', b: 'Mustang', c: 2021, d: 'red' },
    { a: 'Tesla', b: 'Model 3', c: 2022, d: 'white' }
  ];
  
  const fn1 = (x) => {
    console.log(`Make: ${x.a}, Model: ${x.b}, Year: ${x.c}, Color: ${x.d}`);
  };
  
  const fn2 = (y) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].a.toLowerCase() === y.toLowerCase()) {
        result.push(arr[i]);
      }
    }
    return result;
  };
  
  const fn3 = (a, b, c, d) => {
    arr.push({ a, b, c, d });
  };
  
  const fn4 = (z) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].b.toLowerCase() === z.toLowerCase()) {
        arr.splice(i, 1);
        break;
      }
    }
  };
  
  for (let i = 0; i < arr.length; i++) {
    fn1(arr[i]);
  }

  fn3('Chevrolet', 'Camaro', 2023, 'yellow');
  console.log('\nAfter adding a new car:');
  for (let i = 0; i < arr.length; i++) {
    fn1(arr[i]);
  }
  
  const result = fn2('Toyota');
  console.log('\nToyota cars:');
  for (let i = 0; i < result.length; i++) {
    fn1(result[i]);
  }
  
  fn4('Civic');
  console.log('\nAfter removing a car:');
  for (let i = 0; i < arr.length; i++) {
    fn1(arr[i]);
  }
  