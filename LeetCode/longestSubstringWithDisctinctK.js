const longestSubstringWithDisctinctK = (str, k) => {
    let start = end = 0;
    let unique = new Map();
    let uniqueCount = 0;
    let max = 0;
    while(end < str.length) {
        let curEnd = +!unique.get(str[end])
        if(uniqueCount + curEnd <= k) {
            let cur = unique.get(str[end])
            if(!cur) {
                unique.set(str[end], 1)
                uniqueCount++;
            }else{
                unique.set(str[end], cur+1)
            }
            max = Math.max(max, str.slice(start, end+1).length)
            end++;
        }else{
            let cur = unique.get(str[start]);
            unique.set(str[start], cur-1)
            if(cur === 1) uniqueCount--;
            start++;
        }
    }
    return max;
};

longestSubstringWithDisctinctK('Zafer', 3); //?
