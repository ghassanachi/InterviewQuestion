function maxDuffelBagValue(cakeArr, weightCap) {
    let bestValueAtWeight = [];


    for(let i = 0; i<= weightCap; i++) {
        bestValueAtWeight[i] = [0];
        for( let cake of cakeArr) {
            if(cake.value > 0 && cake.weight === 0) {
                return Infinity;
            }
            if(i - cake.weight >= 0) {
                bestValueAtWeight[i] = Math.max(bestValueAtWeight[i], bestValueAtWeight[(i-cake.weight)] + cake.value);
            }
        }
    }
    return bestValueAtWeight[bestValueAtWeight.length - 1];

}

let cakeTypes = [
    {weight: 7, value: 160},
    {weight: 1, value: 90},
    {weight: 2, value: 15},
];

let capacity = 20;

console.log(maxDuffelBagValue(cakeTypes, capacity));