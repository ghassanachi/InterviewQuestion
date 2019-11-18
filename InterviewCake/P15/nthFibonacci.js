function fib(n) {
    if(n < 0) {
        throw "Fib Index Cannot Be Negative"
    }
    let result = 0;
    let prev = 0;
    let prevPrev = 0;
    while(n>0) {
        if(prev === 0) {
            prev = 1;
            result = prev;
        }else{
            result = prev + prevPrev;
            prevPrev = prev;
            prev = result;
        }
        n--;
    }
    return result;
}


let desc = '4th entry';
let actual = fib(4);
let expected = 3;
assertValueEqual(actual, expected, desc);


desc = '20th entry';
actual = fib(20);
expected = 6765;
assertValueEqual(actual, expected, desc);

desc = 'negative entry';
const negEntry = () => (fib(-12));
assertThrowsError(negEntry, desc);





function assertValueEqual(a, b, desc) {
    if (a !== b) {
        console.log(`${desc} ... FAIL: ${a} != ${b}`)
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