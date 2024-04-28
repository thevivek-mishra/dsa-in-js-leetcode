/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if( x < 0) return false;
    
    let reversed = 0;
    let temp = x;
    while(x > 0 ){
        let remainder = x % 10;
        reversed = reversed *10 + remainder;
        x = Math.floor(x/10)
    }
    
    return temp === reversed
    
};