/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0; // Initialize the left pointer
    let right = height.length - 1; // Initialize the right pointer
    let maxArea = 0; // Variable to keep track of the maximum area

    while (left < right) {
        // Calculate the width of the container
        const width = right - left;

        // Calculate the area with the current left and right pointers
        const area = Math.min(height[left], height[right]) * width;

        // Update the maximum area if the current area is larger
        maxArea = Math.max(maxArea, area);

        // Move the pointers: move the pointer with the shorter height inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};
