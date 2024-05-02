/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let sortedNums = nums.toSorted((a,b)=>a-b)
    let dub
    for(let i= 0; i<sortedNums.length; i++){
        if(sortedNums[i] === sortedNums[i+1]){
            dub = sortedNums[i]
        }
    }
    return dub
};