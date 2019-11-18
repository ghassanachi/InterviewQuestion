function uniqueFinder(idArr) {
    let result = 0;
    for(let el of idArr) {
        result = result ^ el;
    }
    return result;
}


let idArray = [1, 2, 3, 1, 2, 4, 5, 3, 4];

console.log(uniqueFinder(idArray));