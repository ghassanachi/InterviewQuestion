function buildPalindrome(st) {
    for(let i = 0; i<=st.length; i++) {
        if(isPalindrome(st.slice(i))) {
            return st + st.slice(0,i).split("").reverse().join("");
        }
    }
    return st;
}

function isPalindrome(str) {
    if(str === str.split("").reverse().join("")) return true;
    return false
}


buildPalindrome('Ghassann') //?
