const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
  if (lockBoard) return;
  this.classList.add('flip');

  if (!hasFlippedCard){
    //First Click
    hasFlippedCard = true;
    firstCard = this;
  }

  else{
    //Second Click
    secondCard = this;
    hasFlippedCard = false;

    //Do cards match?

    checkForMatch();

  }
}

function checkForMatch(){

  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();

}

function disableCards(){
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unflipCards(){
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    lockBoard = false;
  },1000);
}

cards.forEach(card => card.addEventListener('click', flipCard));
