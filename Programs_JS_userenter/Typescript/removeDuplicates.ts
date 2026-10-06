function removeDuplicates1(arr: number[]): number[] {
  return [...new Set(arr)];
}

const numbers1: number[] = [1, 2, 2, 3, 4, 4, 5];

console.log(removeDuplicates(numbers));
// [1, 2, 3, 4, 5]