function timeToSell(arr) {
  let highest = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let difference = arr[j] - arr[i];

      if (difference > highest) {
        highest = difference;
      }
    }
  }

  return highest;
}

console.log(timeToSell([7, 1, 5, 3, 6, 4])); // 5
console.log(timeToSell([7, 6, 4, 3, 1]));    // 0


function timeToSell(arr) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < arr.length; i++) {
    // Find the minimum price so far
    if (arr[i] < minPrice) {
      minPrice = arr[i];
    }

    // Calculate profit if we sell today
    let profit = arr[i] - minPrice;

    // Update maximum profit
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}

console.log(timeToSell([7, 1, 5, 3, 6, 4])); // 5
console.log(timeToSell([7, 6, 4, 3, 1]));    // 0
