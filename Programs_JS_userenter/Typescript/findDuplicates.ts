function findDuplicates1(arr: number[]): number[] {
  const seen = new Set<number>();
  const duplicates = new Set<number>();

  for (const num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    }

    seen.add(num);
  }

  return [...duplicates];
}

const numbers2: number[] = [1, 2, 3, 2, 4, 5, 3, 6];

console.log(findDuplicates1(numbers));
// [2, 3]