const Bernard1 = {
  name: "Bernard",
  weight: 78,
  height: 169,
  calcBMI: function () {
    this.IMC = (this.weight / this.height) * this.height;
    return this.IMC;
  },
};

const Marcel1 = {
  name: "Bernard",
  weight: 92,
  height: 195,
  calcBMI: function () {
    this.IMC = (this.weight / this.height) * this.height;
    return this.IMC;
  },
};

const Bernard2 = {
  name: "Bernard",
  weight: 95,
  height: 188,
  calcBMI: function () {
    this.IMC = (this.weight / this.height) * this.height;
    return this.IMC;
  },
};

const Marcel2 = {
  name: "Bernard",
  weight: 85,
  height: 176,
  calcBMI: function () {
    this.IMC = (this.weight / this.height) * this.height;
    return this.IMC;
  },
};

const compareIMC = (person1, person2) => {
  let winner;
  let loser;
  if (person1.calcBMI() > person2.calcBMI()) {
    winner = { ...person1 };
    loser = { ...person2 };
  } else {
    winner = { ...person2 };
    loser = { ...person1 };
  }
  console.log(
    `L’IMC de ${winner.name} (${winner.IMC}) est plus élevé que celui de ${loser.name} (${loser.IMC})`
  );
};

compareIMC(Bernard1, Marcel1);
compareIMC(Bernard2, Marcel2);
