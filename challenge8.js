const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcTip = (bill) => {
  if (bill > 50 && bill <= 300) {
    return (bill * 0.15).toFixed();
  } else {
    return (bill * 0.2).toFixed();
  }
};


let tips = [];

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
  }
  
let totals = [];

for (let i = 0; i < bills.length; i++) {
  totals[i] = parseFloat(bills[i]) + parseFloat(tips[i]);
}

console.log(`Valeurs des tips: ${tips}`);
console.log(`Valeurs des totales: ${totals}`);

const calcAverage = (array) => {
    let average = 0;
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    average = total / array.length;
    return average;
}

console.log(`Moyenne des totales: ${calcAverage(totals)}`);