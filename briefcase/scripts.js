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




$("#insert_confirm").hide();


   document.querySelector(".playerNumber").innerHTML=localStorage.getItem("textvalue");
  

function getInputValue() {


  let names = ["assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif",
    "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif",
    "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif",
    "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif",
    "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif",
    "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif",];


  let popThis = ["assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif",
    "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif",
    "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif",
    "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif",
    "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif",
    "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif", "assets/sorry_animation.gif",];

    // document.querySelector(".playerNumber").innerHTML=localStorage.getItem("textvalue");
  let cells = document.querySelectorAll('.show_list')
  let popCon = document.querySelectorAll('.content_pop')

  Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
  };

  var inputVal = document.querySelector(".playerNumber").innerHTML=localStorage.getItem("textvalue");;
  names.insert(inputVal - 1, 'assets/cases/player_day.png');
  popThis.insert(inputVal - 1, 'assets/player-of-the-day.gif');

  console.log(names);


  for (i = 0; i < cells.length; i++) {

    cells[i].innerHTML += '<img src="' + names[i] + '" />';

    $("#insert_confirm").show();

  }

  for (a = 0; a < popCon.length; a++) {
    popCon[a].innerHTML += '<img src="' + popThis[a] + '"  style = "width: 701px;margin-left:-126px;" />';

  }

}

$(window).load(function(){        
  $('#myModal').modal('show');
   }); 


// (function shuffle() {
//   cards.forEach(card => {
//     let randomPos = Math.floor(Math.random() * 30);
//     card.style.order = randomPos;
//     console.log(card)


//     if ($("#aurelia").click(function () {

//       console.log(style.order)

//     }));


//   });

// })();



cards.forEach(card => card.addEventListener('click', flipCard));
$(document).ready(function () {
  ;
});


$(document).ready(function () {
  $(".vue").click(function () {

  });
});




