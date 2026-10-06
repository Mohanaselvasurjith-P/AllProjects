
function fibonacci(n) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    console.log(a);
    [a, b] = [b, a + b];
  }
}
fibonacci(7);

// 0 1 1 2 3 5 

//....................................
//with arry
//....................................
function fibonacciArray(n) {
  let fibSeries = [0, 1]; 
  for (let i = 2; i < n; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
  }
  console.log(fibSeries);
}

fibonacciArray(7);  