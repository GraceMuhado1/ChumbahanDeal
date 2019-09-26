let cards = document.querySelectorAll('.chummy-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;
  checkForMatch();
}


function disableCards() {
  chumy.removeEventListener('click', flipCard);
  // secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    // firstCard.classList.remove('flip');
    // secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 30);
    card.style.order = randomPos;
    console.log(card)


    if ($("#aurelia").click(function () {

      console.log(style.order)

    }));


  });

})();

cards.forEach(card => card.addEventListener('click', flipCard));
$(document).ready(function () {
  ;
});


$(document).ready(function () {
  $(".vue").click(function () {

  });
});




 