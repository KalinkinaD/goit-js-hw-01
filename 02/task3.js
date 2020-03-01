const findLongestWord = function(string) {
  let exampleOfString = string.split(' ');
  let longestWord = exampleOfString[0];
  for (let i = 0; i < exampleOfString.length; i++) {
    if (exampleOfString[i].length > longestWord.length) {
      longestWord = exampleOfString[i];
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
