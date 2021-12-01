const tipCalculator = (bill) => {
  let percentage;
  if (bill >= 50 && bill < 300) {
    percentage = 0.15;
  } else {
    percentage = 0.2;
  }
  return "La note était de " + bill + ", le pourboire de " + (percentage * bill) + " et la valeur totale était de " + (bill + percentage * bill) + ".";
};

console.log(tipCalculator(275));
console.log(tipCalculator(40));
console.log(tipCalculator(430));
