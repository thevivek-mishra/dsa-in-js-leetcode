/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let word = s.trim().split(" ")
    let lastIndex =word.length -1
    
    return word[lastIndex].length
    
    
};