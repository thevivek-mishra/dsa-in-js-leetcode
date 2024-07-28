/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  let vowels = 'aeiou'
  let result = 0 
  let count = 0 // count of vowels of current window
  for (var i = 0; i < s.length; i++) {
    if (i >= k) { // remove window's first character
      // if the window's first character is a vowel, subtract count
      if (vowels.includes(s[i - k])) {
        count--
      }
    }
		// add current character to window
    if (vowels.includes(s[i])) {
      // adds vowel to count
      count++
      result = Math.max(result, count)
      // max number of vowels
      if (result === k) {
        return k
      }
    }
  }
  return result
    
};