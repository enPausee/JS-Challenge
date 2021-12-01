valueTournois1 = {
  Dauphins: [96, 108, 89],
  Koalas: [88, 91, 110],
};

valueTournois2 = {
  Dauphins: [97, 112, 101],
  Koalas: [109, 95, 123],
};

valueTournois3 = {
  Dauphins: [97, 112, 101],
  Koalas: [109, 95, 106],
};

const getAverage = (equipe) => {
  let average = 0;
  let total = 0;
  for (let i = 0; i < equipe.length; i++) {
    total += equipe[i];
  }
  average = total / equipe.length;
  return average;
};

function getWinner(tournois) {
  let winner = "";
  let averageDauphins = getAverage(tournois.Dauphins);
  let averageKoalas = getAverage(tournois.Koalas);
  if (averageDauphins < 100 && averageKoalas < 100) {
    return "Aucun vainqueur car les deux équipes n'ont pas dépasser un score de 100";
  }
  if (averageDauphins > averageKoalas && averageDauphins > 100) {
    winner = "Dauphins";
  } else if (averageDauphins < averageKoalas && averageKoalas > 100) {
    winner = "Koalas";
  } else {
    winner = "Egalité";
  }

  return winner;
}

console.log(
  "Moyenne des scores des Dauphins au tournois 1: " +
    getAverage(valueTournois1.Dauphins)
);
console.log(
  "Moyenne des scores des Koalas au tournois 1: " +
    getAverage(valueTournois1.Koalas)
);
console.log(
  "Moyenne des scores des Dauphins au tournois 2: " +
    getAverage(valueTournois2.Dauphins)
);
console.log(
  "Moyenne des scores des Koalas au tournois 2: " +
    getAverage(valueTournois2.Koalas)
);
console.log(
  "Moyenne des scores des Dauphins au tournois 3: " +
    getAverage(valueTournois3.Dauphins)
);
console.log(
  "Moyenne des scores des Koalas au tournois 3:" +
    getAverage(valueTournois3.Koalas)
);

console.log("Vainqueur du tournois 1: ", getWinner(valueTournois1));
console.log("Vainqueur du tournois 2: ", getWinner(valueTournois2));
console.log("Vainqueur du tournois 3: ", getWinner(valueTournois3));
