const compareStringWithTolerance = (s1, s2, tolerance) => {
    let [short, long] = [s1, s2].sort((a, b) => a.length - b.length)
    if(short.length === long.length) {
        for(i in short) {
            if(s1[i].toLowerCase() !== long[i].toLowerCase()) {
                return false;
            }
        }
        return true;
    }else if(Math.abs(s1.length - s2.length) > tolerance) {
        return false;
    }else{
        let i = 0;
        while( i < short.length || i < long.length) {
            if(i >= short.length) {
                return compareStringWithTolerance(long[i] + short.slice(i), long.slice(i), tolerance - 1);
            }
            if(short[i].toLowerCase() !== long[i].toLowerCase() && tolerance > 0) {
                return compareStringWithTolerance(long[i] + short.slice(i), long.slice(i), tolerance - 1) || compareStringWithTolerance(short.slice(i), long.slice(i+1), tolerance - 1)
            }
            i++;
        }
    }
    return false;
}