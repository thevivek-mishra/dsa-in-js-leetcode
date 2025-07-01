/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      // Shrink the prefix
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }

  return prefix;
}
