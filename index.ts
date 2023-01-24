/*

1. You are given a string composed of digits (e.g. “34536554”)
2. String’s length may be between 2 and 9 inclusive
3. Return all possible letter combinations which could be presented by this number (ordering does not matter)

NB: “1" doesn’t have any letters on it.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/1200px-Telephone-keypad2.svg.png
*/

const NUM_DATA = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

const number: string = '357';

const numberToLetters = (n: string) => {
  // N must be between 2 and 9 inclusive.
  if(n.length < 2 || n.length > 9) return false;

  // Get the arrays of letters for each number (remove any falsy values).
  const arr = n.split('').map(num => NUM_DATA[num]).filter(Boolean);

  // Reduce the arrays of letters into a single array of arrays.
  const result = arr.reduce((a, b) => a.reduce((r, v) => r.concat(b.map(w => [].concat(v, w))), []));
  
  // Return the result.
  return result;
}

const answer = numberToLetters(number);
console.log(answer.length)
console.log(answer);
