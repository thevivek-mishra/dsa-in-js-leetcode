function maxOperations(nums: number[], targetSum: number): number {
    
    const countMap = new Map<number, number>();
    let operationsCount = 0;
  
    // Iterate over each number in the array
    for (const num of nums) {
        const complement = targetSum - num; // Calculate the complement of the current number

        // If the complement is already in the map, 
        // we can form a pair whose sum is equal to targetSum
        if (countMap.get(complement) > 0) {
            
            countMap.set(complement, countMap.get(complement) - 1); // Decrement the count of complement in map
            operationsCount++; // Increment the count of valid operations
        } else {
            
            // If the complement is not there, store/update the count of the current number
            const currentCount = (countMap.get(num) || 0) + 1;
            countMap.set(num, currentCount);
        }
    }
  
    return operationsCount; // Return the total number of operations
}