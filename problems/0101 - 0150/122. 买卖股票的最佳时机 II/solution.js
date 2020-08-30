/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let income = 0,
    price = -1;
  for (let i = 0; i < prices.length - 1; i++) {
    if (price >= 0 && prices[i] > prices[i + 1]) {
      income += prices[i] - price;
      price = -1;
    } else if (price < 0 && prices[i] < prices[i + 1]) {
      price = prices[i];
    }
  }
  if (price >= 0) {
    income += prices[prices.length - 1] - price;
  }
  return income;
};
