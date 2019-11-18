function getMaxProfit(stock_prices) {
    if (stock_prices.length < 1) {
        throw new Error('Stock Prices Not Long Enough');
    }

    let min_price = stock_prices[0];
    let max_profit = stock_prices[1] - stock_prices[0];

    stock_prices.forEach(function (price, idx) {
        if (idx !== 0) {
            let current_profit = price - min_price;
            max_profit = Math.max(max_profit, current_profit);
            min_price = Math.min(price, min_price);
        }
    });
    return max_profit;

}


console.log(getMaxProfit([10, 7, 5, 4, 3, 9]));

