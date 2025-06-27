/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  brute force appraoch  

var twoSum = function(nums, target) {
    for(let i=0; i< nums.length; i++){
        for(let j=i+1; j< nums.length; j++){
           if ( nums[i] + nums[j] === target){
            return [i,j]
           } 
        }
    }
};

// optimal solutions 
// this will not work here because array is not sorted then full test will not be passed os here is better and otimal apprach is hashmap

// var twoSum = function(nums, target) {
//     let left =0;
//     let right = nums.length -1;

//     while(left <right){
//         let sum = nums[left] + nums[right] 
//         if(sum === target ){

//             return [left, right]
//         }else if( sum < target){
//             left++
//         }else {
//             right--
//         }
//     }
//     return []
// }