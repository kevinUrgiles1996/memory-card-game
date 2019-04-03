const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(){
  this.classList.add('flip');

  if (!hasFlippedCard){
    //First Click
    hasFlippedCard = true;
    firstCard = this;
  }

  else{
    //Second Click
    secondCard = this;
    cardHasFlipped = false;
    console.log(firstCard, secondCard);
  }
}

cards.forEach(card => card.addEventListener('click', flipCard));
