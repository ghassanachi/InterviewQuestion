var map = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
};
var letterCombinations = function(digits) {
let result = [""]
let arr = digits.split("")
for(digit of arr) {
    let letterMap = map[digit]; 
    let rCop = result.slice()
    result = [];
    for(let letter of letterMap) {
        for(let cur of rCop) {
            result.push(cur + letter);
        }
    }
}
return result.length > 1 ? result: []
}

letterCombinations("23") //?