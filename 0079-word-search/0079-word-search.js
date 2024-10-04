/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length;
    let cols = board[0].length;

    const dfs = (r, c, index) => {
        // Base case: if all characters in the word are matched
        if (index === word.length) return true;

        // Check boundaries and character match
        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[index]) {
            return false;
        }

        // Temporarily mark the current cell as visited
        let temp = board[r][c];
        board[r][c] = '#';

        // Explore all four directions: down, up, right, left
        let found = dfs(r + 1, c, index + 1) ||
                    dfs(r - 1, c, index + 1) ||
                    dfs(r, c + 1, index + 1) ||
                    dfs(r, c - 1, index + 1);

        // Restore the original value of the cell
        board[r][c] = temp;

        return found;
    };

    // Loop through each cell in the board as the starting point
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // If DFS finds the word, return true
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
};
