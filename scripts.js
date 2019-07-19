const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.toggle("flip");

  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  } 

    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
}


function checkForMatch() {
    let isMatch = firstCard.dataset.image === secondCard.dataset.image

    isMatch ? disableCards() : unflipCards();

}
function disableCards(){
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
}

function unflipCards(){
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
      }, 1000);
}


cards.forEach(card => card.addEventListener("click", flipCard));
