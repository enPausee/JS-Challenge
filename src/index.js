const cards = document.querySelector(".cards");
const animalsToAdopt = [
  {
    name: "Lucky",
    picture: "https://placekitten.com/200/287",
  },
  {
    name: "Symba",
    picture: "https://placekitten.com/200/139",
  },
  {
    name: "Léo",
    picture: "https://placekitten.com/200/90",
  },
  {
    name: "Milo",
    picture: "https://placekitten.com/200/194",
  },
  {
    name: "Charly",
    picture: "https://placekitten.com/200/179",
  },
];

function createDivWithClass(className) {
  const div = document.createElement("div");
  div.classList.add(className);
  return div;
}

function createElementWithClass(element, className) {
  const el = document.createElement(element);
  el.classList.add(className);
  return el;
}

function createCard(title, imageUrl) {
  const card = createDivWithClass("card");
  cards.appendChild(card);

  const cardHeader = createDivWithClass("card-header");
  card.appendChild(cardHeader);

  const cardImg = createDivWithClass("card-img");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardHeader.appendChild(cardImg);

  const cardBody = createDivWithClass("card-body");
  card.appendChild(cardBody);

  const cardTitle = createElementWithClass("h2", "card-title");
  cardTitle.innerHTML = title;
  cardBody.appendChild(cardTitle);

  const cardButton = createElementWithClass("button", "card-button");
  cardButton.innerHTML = "Adopt Now";
  cardBody.appendChild(cardButton);
}

for (let i = 0; i < animalsToAdopt.length; i++) {
  createCard(animalsToAdopt[i].name, animalsToAdopt[i].picture);
}
