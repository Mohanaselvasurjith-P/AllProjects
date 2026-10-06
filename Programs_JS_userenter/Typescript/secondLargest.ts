function secondLargest1(arr: number[]): number | undefined {
  const unique: number[] = [...new Set(arr)];

  unique.sort((a, b) => b - a);

  return unique[1];
}

const numbers1: number[] = [10, 20, 5, 30, 20, 15];

console.log(secondLargest1(numbers));
// 20