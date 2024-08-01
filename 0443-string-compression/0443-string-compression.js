/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let writeIndex = 0; // Position to write the compressed characters
    let readIndex = 0;  // Position to read the characters

    while (readIndex < chars.length) {
        let char = chars[readIndex];
        let count = 0;

        // Count the number of times the current character appears consecutively
        while (readIndex < chars.length && chars[readIndex] === char) {
            readIndex++;
            count++;
        }

        // Write the character
        chars[writeIndex++] = char;

        // Write the count if greater than 1
        if (count > 1) {
            let countStr = count.toString();
            for (let i = 0; i < countStr.length; i++) {
                chars[writeIndex++] = countStr[i];
            }
        }
    }

    // Return the length of the compressed string
    return writeIndex;
};