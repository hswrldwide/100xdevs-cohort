/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

<<<<<<< HEAD
function isAnagram(str1, str2) {  
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if (str1.length !== str2.length) {
      return false;
    }
    let strArray = str1.split('');
    for (let j = 0; j < str2.length; j++) {
      const index = strArray.indexOf(str2[j]);
      if (index !== -1) {
        strArray.splice(index, 1);
      } else {
        return false;
      }
    }
    return strArray.length === 0;  
=======
function isAnagram(str1, str2) {

>>>>>>> upstream/master
}

module.exports = isAnagram;
