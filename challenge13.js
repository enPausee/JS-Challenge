/* Exercice 1 */
console.log("Exercice 1: ");
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Tache 1
const players1 = [...game.players[0]]; //tableau des joueurs du Bayern Munich
const players2 = [...game.players[1]]; //tableau des joueurs du Borrussia Dortmund

//Tache 2
const gk = players1[0]; //récupération du gardien du Bayern Munich (Neuer)

const fieldPlayers = [...players1]; //On récupère l'ensemble des joueurs de l'équipe 1 et,
fieldPlayers.shift(); //on retire le gardien

//Tache 3
const allPlayers = [...game.players[0], ...game.players[1]]; //On récupère l'entièreté des joueurs

//Tache 4
const players1Final = [...players1]; //On récupère l'entièreté des joueurs de l'équipe 1;
players1Final.push("Thiago", "Coutinho", "Perisic"); //et l'on rajoute les remplaçants

//Tache 5
const team1 = game.odds.team1;
const draw = game.odds.draw; //On récupère les valeurs de l'objet
const team2 = game.odds.team2;

//Tache 6
const printGoals = (joueurs) => {
  //On boucle sur chaqu'un des joueurs
  joueurs.forEach((joueur) => {
    let goals = 0;
    //On vérifie si leur nom existe dans la liste des buteurs
    if (game.scored.indexOf(joueur) !== -1) {
      //Si il existe, on parcours la liste des buteurs pour compter le nombre de fois où le nom du joueur apparaît
      game.scored.forEach((scorer) => {
        if (scorer === joueur) {
          goals++;
        }
      });
    }
    console.log(`Joueur: ${joueur} à un total de but de: ${goals}`);
  });
};

printGoals(players1);
printGoals(players2);

//Tache 7
function getKeyOfMinValue(object) {
  return Object.keys(object).reduce((a, b) => (object[a] > object[b] ? b : a));
}

console.log(
  `L'équipe avec les grandes chances de gagné est ${getKeyOfMinValue(
    game.odds
  )} avec une cote à ${Math.min(...Object.values(game.odds))}`
);

/* Exercice 2 */

console.log(`\nExercice 2:`);

//Tache 1
game.scored.forEach((scorer, index) => {
  console.log(`But ${index + 1}: ${scorer}`);
});

//Tache 2
const oddsAverage = (odds) => {
  let average = 0;
  for (let key in odds) {
    average += odds[key];
  }
  return average / Object.keys(odds).length;
};

console.log(`Moyenne des probabilités : ${oddsAverage(game.odds)}`);

//Tache 3
for (let key in game.odds) {
  switch (key) {
    case "team1":
      console.log(
        `Probabilité de victoire pour ${game.team1} : ${game.odds[key]}`
      );
      break;
    case "team2":
      console.log(
        `Probabilité de victoire pour ${game.team2} : ${game.odds[key]}`
      );
      break;
    default:
      console.log(`Probabilité d'égaliter : ${game.odds[key]}`);
  }
}

//Tache 4

const scorers = {};

//Même principe que pour la printGoals(), mais on initialise l'objet scorers au lieu de console.log les buteurs
const getScorers = (joueurs) => {
  joueurs.forEach((joueur) => {
    let goals = 0;
    if (game.scored.indexOf(joueur) !== -1) {
      game.scored.forEach((scorer) => {
        if (scorer === joueur) {
          goals++;
          scorers[joueur] = goals;
        }
      });
    }
  });
};
getScorers(allPlayers); // { Gnarby: 1, Lewandowski: 2, Hummels: 1 }

/* Exercice 3 */

const gameEvents = [
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
];

//Tache 1
const events = gameEvents.map((event) => {
  return `${event[0]} ${event[1]}`;
});

//Tache 2

const indexToDelete = events.indexOf("64 🟨 Yellow card"); //On récupère l'index de l'évènement à supprimer
events.splice(indexToDelete, 1); //On supprime l'évènement
console.log(events);

//Tache 3

console.log(
  `Un évènement est apparu en moyenne toutes les ${90 / events.length} minutes.`
);

//Tache 4

for (let time of gameEvents) {
  let timestamp = "";
  if(time[0] < 45){
    timestamp = "[PREMIÈRE MOITIÉ]";
  }
  else {
    timestamp = "[SECONDE MOITIÉ]";
  }
  console.log(`${timestamp} ${time[0]}. ${time[1]}`);
}