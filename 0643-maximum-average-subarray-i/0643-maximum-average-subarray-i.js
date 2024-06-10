/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += nums[i];
    }

    let currentSum = maxSum;
    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum / k;
    
};