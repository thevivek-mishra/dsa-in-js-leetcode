// Function to calculate the greatest common divisor (GCD) of two numbers
// Uses Euclidean algorithm
function gcd(a: number, b: number): number {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

// Function to find the greatest common divisor of strings str1 and str2
function gcdOfStrings(str1: string, str2: string): string {
    // Check if concatenating the strings in both orders gives the same result
    // This is required because two strings can only be multiples of each other
    // if this condition is true
    if (str1 + str2 !== str2 + str1) {
        return ""; // If they are not equivalent, return an empty string
    }
  
    // Calculate the greatest common divisor (GCD) of the lengths of the two strings
    const gcdValue = gcd(str1.length, str2.length);
  
    // Return the common divisor string which is the substring from start of str1 to its GCD length
    return str1.substring(0, gcdValue);
}