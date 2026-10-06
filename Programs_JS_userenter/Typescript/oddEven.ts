function evenOdd1(arr: number[]): {
  even: number[];
  odd: number[];
} {
  return {
    even: arr.filter(num => num % 2 === 0),
    odd: arr.filter(num => num % 2 !== 0)
  };
}