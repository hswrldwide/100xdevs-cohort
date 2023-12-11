/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowerStr = str.toLowerCase();

  const alphanumericStr = lowerStr.replace(/[^a-z0-9]/g, '');

  for (let i = 0, j = alphanumericStr.length - 1; i < j; i++, j--) {
    if (alphanumericStr[i] !== alphanumericStr[j]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
