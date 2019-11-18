function PayingUp(n, m) {
    let totalMap = new Map();
    let combinations = new Set();    
    for(let bill of n) {
        if(totalMap.get(m - bill) === true) {
            return "Yes"
        }else{
            if (totalMap.get(bill) !== true) {
                totalMap.set(bill, true)
                combinations.add(bill)
            }
            let added = [];
            combinations.forEach(x => {
                let sum = x + bill;
                if(!totalMap.get(sum)) {
                    totalMap.set(sum, true)
                    added.push(sum)
                }
            })
            for(let a of added) {
                combinations.add(a);
            }
        }
    }
    return "No"
}

PayingUp([1,1,1], 3) //?
