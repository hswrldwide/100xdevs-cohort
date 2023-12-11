/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let count = 0;
    let strArray = str.toLowerCase().split('');
    for (let i = 0; i<strArray.length; i++){
      if (strArray[i] == 'a' || strArray[i] == 'e' || strArray[i] == 'i' || strArray[i] == 'o' || strArray[i] == 'u'){
        count += 1;
      }
    }
    return count;
}

module.exports = countVowels;