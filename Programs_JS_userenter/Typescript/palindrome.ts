function isPalindrome1(str: string): boolean {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome1("madam")); // truenode --version