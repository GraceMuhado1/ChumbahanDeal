let cards = document.querySelectorAll('.chummy-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

var boxes = document.getElementById('box1');

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

function myFunction() { 
    var x =  
        document.getElementById("myText").value; 
    
    document.getElementById("demo").innerHTML = x;
    
    

} 
 $(".upload_fin1").hide();
 $(".upload_fin2").hide();
 $(".upload_fin3").hide();
 $(".upload_fin4").hide();
 $(".upload_fin5").hide();
 $(".upload_fin6").hide();
 $(".upload_fin7").hide();
 $(".upload_fin8").hide();
 $(".upload_fin9").hide();
 $(".upload_fin10").hide();
 
 $(".firstcon").hide();
/////

$(".chosen1").hide();
$(".chosen2").hide();
$(".chosen3").hide();
$(".chosen4").hide();
$(".chosen5").hide();
$(".chosen6").hide();
$(".chosen7").hide();
$(".chosen8").hide();
$(".chosen9").hide();
$(".chosen10").hide();


 $(".hidebackface201").click(function(){
  $(".second-con").hide();
  $(".firstcon").show();
  $(".backface201").hide();
  $(".stand1").hide();
  $(".chosen1").show();
  
});


$(".hidebackface202").click(function(){
  $(".second-con").hide();
  $(".firstcon").show();
  $(".backface202").hide();
  $(".stand2").hide();
  $(".chosen2").show();
});


$(".hidebackface203").click(function(){
  $(".second-con").hide();
  $(".firstcon").show();
  $(".backface203").hide();
  $(".stand3").hide();
  $(".chosen3").show();
});



$(".hidebackface204").click(function(){
  $(".second-con").hide();
  $(".firstcon").show();
  $(".backface204").hide();
  $(".stand4").hide();
  $(".chosen4").show();
});

 

$(".hidebackface205").click(function(){
  $(".second-con").hide();
  $(".firstcon").show();
  $(".backface205").hide();
  $(".stand5").hide();
  $(".chosen5").show();
});



$(".hidebackface206").click(function(){
  $(".second-con").hide();
  $(".firstcon").show();
  $(".backface206").hide();
  $(".stand6").hide();
  $(".chosen6").show();
});



$(".hidebackface207").click(function(){
  $(".second-con").hide();
  $(".firstcon").show();
  $(".backface207").hide();
  $(".stand7").hide();
  $(".chosen7").show();
});


$(".hidebackface208").click(function(){
  $(".second-con").hide();
  $(".firstcon").show();
  $(".backface208").hide();
  $(".stand8").hide();
  $(".chosen8").show();
});



$(".hidebackface209").click(function(){
  $(".second-con").hide();
  $(".firstcon").show();
  $(".backface209").hide();
  $(".stand9").hide();
  $(".chosen9").show();
});


$(".hidebackface2010").click(function(){
  $(".second-con").hide();
  $(".firstcon").show();
  $(".backface2010").hide();
  $(".stand2").hide();
  $(".chosen10").show();
});


      window.addEventListener('load', function() {
        document.querySelector('.upload_case2').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                var img2 = document.querySelector('.myImg2');  // $('img')[0]
                img2.src = URL.createObjectURL(this.files[0]); // set src to file url
                img2.onload = imageIsLoaded2; // optional onload event listener

                var img2 = document.querySelector('.myImg2');  // $('img')[0]
               img2.src = URL.createObjectURL(this.files[0]); // set src to file url
               var img2 = document.querySelector('.pop_up2');  // $('img')[0]
               img2.src = URL.createObjectURL(this.files[0]); // set src to file url
                               
                         
            }
        });
      });

      
      window.addEventListener('load', function() {
        document.querySelector('.upload_case3').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                var img3 = document.querySelector('.myImg3');  // $('img')[0]
                img3.src = URL.createObjectURL(this.files[0]); // set src to file url
                img3.onload = imageIsLoaded3; // optional onload event listener

                var img3 = document.querySelector('.myImg3');  // $('img')[0]
               img3.src = URL.createObjectURL(this.files[0]); // set src to file url
               var img3 = document.querySelector('.pop_up3');  // $('img')[0]
               img3.src = URL.createObjectURL(this.files[0]); // set src to file url
                               
                         
            }
        });
      });


      window.addEventListener('load', function() {
        document.querySelector('.upload_case4').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                var img4 = document.querySelector('.myImg4');  // $('img')[0]
                img4.src = URL.createObjectURL(this.files[0]); // set src to file url
                img4.onload = imageIsLoaded4; // optional onload event listener

                var img4 = document.querySelector('.myImg4');  // $('img')[0]
               img4.src = URL.createObjectURL(this.files[0]); // set src to file url
               var img4 = document.querySelector('.pop_up4');  // $('img')[0]
               img4.src = URL.createObjectURL(this.files[0]); // set src to file url
                               
                         
            }
        });
      });

      window.addEventListener('load', function() {
        document.querySelector('.upload_case5').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                var img5 = document.querySelector('.myImg5');  // $('img')[0]
                img5.src = URL.createObjectURL(this.files[0]); // set src to file url
                img5.onload = imageIsLoaded5; // optional onload event listener

                var img5 = document.querySelector('.myImg5');  // $('img')[0]
               img5.src = URL.createObjectURL(this.files[0]); // set src to file url
               var img5 = document.querySelector('.pop_up5');  // $('img')[0]
               img5.src = URL.createObjectURL(this.files[0]); // set src to file url
                               
                         
            }
        });
      });

      window.addEventListener('load', function() {
        document.querySelector('.upload_case6').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                var img6 = document.querySelector('.myImg6');  // $('img')[0]
                img6.src = URL.createObjectURL(this.files[0]); // set src to file url
                img6.onload = imageIsLoaded6; // optional onload event listener

                var img6 = document.querySelector('.myImg6');  // $('img')[0]
               img6.src = URL.createObjectURL(this.files[0]); // set src to file url
               var img6 = document.querySelector('.pop_up6');  // $('img')[0]
               img6.src = URL.createObjectURL(this.files[0]); // set src to file url
                               
                         
            }
        });
      });

      window.addEventListener('load', function() {
        document.querySelector('.upload_case7').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                var img7 = document.querySelector('.myImg7');  // $('img')[0]
                img7.src = URL.createObjectURL(this.files[0]); // set src to file url
                img7.onload = imageIsLoaded7; // optional onload event listener

                var img7 = document.querySelector('.myImg7');  // $('img')[0]
               img7.src = URL.createObjectURL(this.files[0]); // set src to file url
               var img7 = document.querySelector('.pop_up7');  // $('img')[0]
               img7.src = URL.createObjectURL(this.files[0]); // set src to file url
                               
                         
            }
        });
      });

      window.addEventListener('load', function() {
        document.querySelector('.upload_case8').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                var img8 = document.querySelector('.myImg8');  // $('img')[0]
                img8.src = URL.createObjectURL(this.files[0]); // set src to file url
                img8.onload = imageIsLoaded8; // optional onload event listener

                var img8 = document.querySelector('.myImg8');  // $('img')[0]
               img8.src = URL.createObjectURL(this.files[0]); // set src to file url
               var img8 = document.querySelector('.pop_up8');  // $('img')[0]
               img8.src = URL.createObjectURL(this.files[0]); // set src to file url
                               
                         
            }
        });
      });

      window.addEventListener('load', function() {
        document.querySelector('.upload_case9').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                var img9 = document.querySelector('.myImg9');  // $('img')[0]
                img9.src = URL.createObjectURL(this.files[0]); // set src to file url
                img9.onload = imageIsLoaded9; // optional onload event listener

                var img9 = document.querySelector('.myImg9');  // $('img')[0]
               img9.src = URL.createObjectURL(this.files[0]); // set src to file url
               var img9 = document.querySelector('.pop_up9');  // $('img')[0]
               img9.src = URL.createObjectURL(this.files[0]); // set src to file url
                               
                         
            }
        });
      });

      window.addEventListener('load', function() {
        document.querySelector('.upload_case10').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                var img10 = document.querySelector('.myImg10');  // $('img')[0]
                img10.src = URL.createObjectURL(this.files[0]); // set src to file url
                img10.onload = imageIsLoaded10; // optional onload event listener

                var img10 = document.querySelector('.myImg10');  // $('img')[0]
               img10.src = URL.createObjectURL(this.files[0]); // set src to file url
               var img10 = document.querySelector('.pop_up10');  // $('img')[0]
               img10.src = URL.createObjectURL(this.files[0]); // set src to file url
                               
                         
            }
        });
      });






      function imageIsLoaded2(e) {
           alert("success2");
      $(".upload_fin2").show();
      $(".upload2").hide();
    }
      function imageIsLoaded3(e) { 
          alert("success3");
    
      $(".upload_fin3").show();
      $(".upload3").hide();
    }
      function imageIsLoaded4(e) { 
          alert("success4");
      $(".upload_fin4").show();
      $(".upload4").hide();
    }
      function imageIsLoaded5(e) { 
          alert("success5");
      $(".upload_fin5").show();
      $(".upload5").hide();
    }
      function imageIsLoaded6(e) { 
          alert("success6");
      $(".upload_fin6").show();
      $(".upload6").hide();
    }
      function imageIsLoaded7(e) { 
          alert("success7");
      $(".upload_fin7").show();
      $(".upload7").hide();
    }
      function imageIsLoaded8(e) { 
          alert("success8");
    
      $(".upload_fin8").show();
      $(".upload8").hide();
    
    }
      function imageIsLoaded9(e) { 
          alert("success9"); 
      $(".upload_fin9").show();
      $(".upload9").hide();
    }
      function imageIsLoaded10(e) {
           alert("success10");
    
      $(".upload_fin10").show();
      $(".upload10").hide();
    }




  cards.forEach(card => card.addEventListener('click', flipCard));
$(document).ready(function () {
    ;
});


$(document).ready(function () {
    $(".vue").click(function () {

    });
});








