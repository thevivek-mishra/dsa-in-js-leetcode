/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
    let result = '';
    
   for(let i=0; i < word1.length || i <word2.length; i++){

    if(i <word1.length){
        result +=word1.charAt(i)
    }
    if(i <word2.length){
        result +=word2.charAt(i)
    }
   }
    
   return result
};