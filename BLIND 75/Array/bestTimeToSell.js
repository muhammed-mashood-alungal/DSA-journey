var maxProfit = function (prices) {
    let maxProfit = 0
    let start = 0
    let end = 1
    while (end < prices.length && start < prices.length) {
        if (prices[end] - prices[start] > maxProfit) {
            maxProfit = prices[end] - prices[start]
        } else if (prices[end] - prices[start] < 0) {
            start = end
        }
        end++
    }
    return maxProfit
}

