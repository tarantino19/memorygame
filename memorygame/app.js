"use strict";

const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

// console.log(cardArray);

//sort an array randomly

cardArray.sort(() => 0.5 - Math.random()); // how to shuffle an array

// console.log(cardArray); // random array in the console log

//grabbing the grid

const gridDisplay = document.getElementById("grid");

let chosenCard = [];

let chosenCardId = [];

const cardsWon = [];

const resultDisplay = document.getElementById("result");

// console.log(grid);  getting the grid
//for loop kinda like for each of X {}

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img"); //creating a new element
    card.setAttribute("src", "images/blank.png"); //adding the src to the image
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard); // not FLIPCARD () not calling it, cause only called when clicked so no ()
    gridDisplay.appendChild(card); //adding the card in griddisplay
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img"); //searching for every image
  const optionOneId = chosenCardId[0];
  const optionTwoId = chosenCardId[1];

  if (optionOneId === optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionOneId].setAttribute("src", "images/blank.png");
    alert("You've clicked the same image");
  }
  if (chosenCard[0] === chosenCard[1]) {
    alert("You found a match");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(chosenCard); // recording cards won
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("Sorry, try again");
  }

  resultDisplay.textContent = cardsWon.length;
  chosenCard = [];
  chosenCardId = [];

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulations, you found all matches! ";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id"); // this allows us to get /interact with whatever element id we click - so we know exactly which card we click to get array name // so no peaking for card when they inspect code
  //   console.log("clicked", cardId);
  chosenCard.push(cardArray[cardId].name); // pushing chosen card to the array
  chosenCardId.push(cardId); //saving it to the id
  console.log(chosenCard);
  console.log(chosenCardId);
  this.setAttribute("src", cardArray[cardId].img); // shows the images
  if (chosenCard.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
