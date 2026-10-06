function factorial1(n: number): number {
  if (n <= 1) return 1;
  return n * factorial1(n - 1);
}

console.log(factorial1(5)); // 120