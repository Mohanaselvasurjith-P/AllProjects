function fibonacci1(n: number): void {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    console.log(a);
    [a, b] = [b, a + b];
  }
}

fibonacci1(7);