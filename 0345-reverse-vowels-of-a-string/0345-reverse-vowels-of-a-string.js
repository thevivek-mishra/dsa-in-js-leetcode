/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
    const isVowels = (char)=>{
        return /[aeiou]/i.test(char)
    }
    let result = s.split('');
    let vowelsArr = s.split('').filter(isVowels).reverse()
    
    let j =0;
    
    for(let i=0; i<s.length; i++){
        
        if(isVowels(result[i])){
            result[i] =vowelsArr[j]
            j++
        }
    }
    return result.join('')
};