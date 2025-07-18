/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let buy = prices[0];
    let sell = prices[1] > buy ? prices[1] : prices[0];
    let maxProfit = sell - buy;
    let profit = 0;

    for (let i = 1; i < prices.length - 1; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
            sell = prices[i + 1];
            profit = sell - buy;
        }
        if (prices[i + 1] > sell) {
            sell = prices[i + 1];
            profit = sell - buy;
        }
        // console.log(buy);
        // console.log(profit);
        if (profit > maxProfit) maxProfit = profit;
    }
    return maxProfit;
};
