const calcTip = (bill) => {
  if (bill > 50 && bill <= 300) {
    return (bill * 0.15).toFixed();
  } else {
    return (bill * 0.2).toFixed();
  }
};

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  totals[i] = parseFloat(bills[i]) + parseFloat(tips[i]);
}

console.log(totals);
