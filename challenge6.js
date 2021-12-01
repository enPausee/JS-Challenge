let tournois1 = {
  Dauphins: [44, 23, 71],
  Koalas: [65, 54, 59],
};

let tournois2 = {
  Dauphins: [85, 54, 41],
  Koalas: [23, 34, 27],
};

const calcAverage = (equipe) => {
  let average = 0;
  let total = 0;
  for (let i = 0; i < equipe.length; i++) {
    total += equipe[i];
  }
  average = total / equipe.length;
  return average;
};

console.log(
  `Moyenne des Dauphins au tournois 1: ${calcAverage(tournois1.Dauphins)}`
);
console.log(
  `Moyenne des Koalas au tournois 1: ${calcAverage(tournois1.Koalas)}`
);
console.log(
  `Moyenne des Dauphins au tournois 2: ${calcAverage(tournois2.Dauphins)}`
);
console.log(
  `Moyenne des Koalas au tournois 2: ${calcAverage(tournois2.Koalas)} \n`
);

function checkWinner(tournois) {
  let winner = "";
  let averageDauphins = calcAverage(tournois.Dauphins);
  let averageKoalas = calcAverage(tournois.Koalas);
  if (averageDauphins > averageKoalas * 2) {
    return console.log(
      `L'équipe Dauphins game (${averageDauphins} vs ${averageKoalas}).`
    );
  } else if (averageKoalas > averageDauphins * 2) {
    return console.log(
      `L'équipe Kaolas game (${averageKoalas} vs ${averageDauphins}).`
    );
  } else {
    return console.log("Aucun vainqueur.");
  }
}

checkWinner(tournois1);
checkWinner(tournois2);
