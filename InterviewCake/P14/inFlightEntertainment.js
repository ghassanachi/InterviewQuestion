function isTwoMovieRuntime(moviesLengths, flightLength) {
    
    let runTimeLeft = new Map();
    for(const rt of moviesLengths) {
        if(runTimeLeft.get(flightLength - rt)) {
            return true
        }else{
            runTimeLeft.set(rt, rt);
        }
    }
    throw "No Valid Set Of Movies";
}




let desc = 'short array';
let actual = isTwoMovieRuntime([1, 2, 3], 5);
let expected = true;
assertArrayEquals(actual, expected, desc);

desc = 'longer array';
actual = isTwoMovieRuntime([7,1,3,8,0,6], 13);
expected = true;
assertArrayEquals(actual, expected, desc);

desc = 'no combo';
const nocombo = () => (isTwoMovieRuntime([1, 6, 7], 5));
assertThrowsError(nocombo, desc);

function assertArrayEquals(a, b, desc) {
    const arrayA = JSON.stringify(a);
    const arrayB = JSON.stringify(b);
    if (arrayA !== arrayB) {
        console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`)
    } else {
        console.log(`${desc} ... PASS`);
    }
}

function assertThrowsError(func, desc) {
    try {
        func();
        console.log(`${desc} ... FAIL`);
    } catch (e) {
        console.log(`${desc} ... PASS`);
    }
}