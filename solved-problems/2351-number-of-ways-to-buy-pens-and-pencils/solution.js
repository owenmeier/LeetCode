/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function(total, cost1, cost2) {

    let count = 0;
    let largerCost = cost1 >= cost2 ? cost1 : cost2;
    let smallerCost = largerCost == cost1? cost2 : cost1;

    for (let i = 0; i <= total/largerCost; i++) {
        let remaining = total - largerCost * i;
        count += 1 + Math.floor(remaining / smallerCost);
    }
    
    return count;
};
