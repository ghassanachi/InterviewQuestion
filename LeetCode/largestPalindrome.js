var longestPalindrome = function(s) {
    let set = new Set();
    for(let i = 0; i < s.length; i+=1) {
        if(set.has(s[i])) set.delete(s[i])
        else set.add(s[i])
    }
    if(!set.size) return s.length
    return s.length - set.size + 1;
};


longestPalindrome("abbbas")