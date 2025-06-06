/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
     if(s.length != t.length){
        return false
     }
     let arr1 = s.split("").sort().join("")
     let arr2 = t.split("").sort().join("")
     if(arr1 === arr2){
        return true
     }else {
        return false
     }
     
};