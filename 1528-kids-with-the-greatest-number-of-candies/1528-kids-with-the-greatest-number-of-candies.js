/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let output = []
    let max = Math.max(...candies)

    for(let i=0; i <candies.length; i++){
        if(candies[i]+extraCandies >= max){
            output.push(true)
        }else{
            output.push(false)
        }
    }
    return output
};