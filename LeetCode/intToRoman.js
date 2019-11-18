import { runInContext } from 'vm';

let symbols = []


const chunkToRoman = (num, current, _5overflow, _10overflow) => {
    if(num === 0) {
        return "";
    }else if(num == 9) {
        return current + _10overflow;
    }else if(num >= 5) {
        return _5overflow + current.repeat(num - 5);
    }else if(num == 4) {
        return current + _5overflow
    }else{
        return current.repeat(num);
    }
}

var intToRoman = function(num) { 
    let str = "";
    let remaining = num;
    let i = 0;
    while(i < symbols.length) {
        let cur = (remaining - (remaining % symbols[i][1])) / symbols[i][1]
        let _5 = (i-1 >= 0) ? symbols[i-1][0] : null; 
        let _10 = (i-2 >= 0) ? symbols[i-2][0] : null; 
        str = str + chunkToRoman(cur, symbols[i][0], _5, _10 )
        remaining = (remaining % symbols[i][1]);
        i += 2
    } 
    return str;
}
let max = 0;
let fYeah = "";
let lNum = 0;
let run = () =>  {
    for(i = 0; i < 20000; i++) {
        let s = intToRoman(i);
        let set = new Set(s.split(""));
        if(set.size === s.length && s.length > max) {
            fYeah = intToRoman(i)
            max = s.length;
            if(fYeah.length === symbols.length) {
                console.log(i)
            }
        
        }
    }
}


symbols = [
    ["F", 10000],
    ["C", 5000],
    ["U", 1000],
    [" ", 500],
    ["K", 100],
    ["E", 50],
    ["Y", 10],
    ["H", 5],
    ["A", 1],
 ]
 run()
 intToRoman(42) 
 console.log(fYeah)
