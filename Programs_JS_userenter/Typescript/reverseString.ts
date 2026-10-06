function reverseString1(str: string): string {
  return str.split("").reverse().join("");
}

console.log(reverseString1("hello")); // "olleh"