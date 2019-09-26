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

function myFunction() { 
    var x =  
        document.getElementById("myText").value; 
    
    document.getElementById("demo").innerHTML = x;
    
    

} 


// $(function() {

//     // We can attach the `fileselect` event to all file inputs on the page
//     $(document).on('change', '.upload_case1', function() {
//       var input = $(this),
//           numFiles = input.get(0).files ? input.get(0).files.length : 1,
//           label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
//       input.trigger('fileselect', [numFiles, label]);
//     });
    
//     // We can watch for our custom `fileselect` event like this
//     $(document).ready( function() {
//         $('.upload_case1').on('fileselect', function(event, numFiles, label) {
    
//             var input = $(this).parents('.upload_case1').find(':text'),
//                 log = numFiles > 1 ? numFiles + ' files selected' : label;
    
//             if( input.length ) {
//                 input.val(log);
//             } else {
//                 if( log ) alert(log);
                
//                 var img = document.querySelector('.output_image');  // $('img')[0]
//               img.src = URL.createObjectURL(this.files[0]); // set src to file url
               
//               var img = document.querySelector('.pop_up');  // $('img')[0]
//               img.src = URL.createObjectURL(this.files[0]); // set src to file url
          
    
        
//             }
    
//         });
//     });

// });

// $(function() {

//     $(document).on('change', '.upload_case2', function() {
//         var input2 = $(this),
//             numFiles2 = input2.get(0).files ? input2.get(0).files.length : 1,
//             label2 = input2.val().replace(/\\/g, '/').replace(/.*\//, '');
//         input2.trigger('fileselect', [numFiles2, label2]);
//       });
      


//     $(document).ready( function() {
//         $('.upload_case2').on('fileselect', function(event, numFiles2, label2) {
    
//             var input2 = $(this).parents('.upload_case2').find(':text'),
//                 log2 = numFiles2 > 1 ? numFiles2 + ' files selected' : label2;
    
//             if( input2.length ) {
//                 input2.val(log2);
//             } else {
//                 if( log2 ) alert(log2);
                
//                 var img2 = document.querySelector('.output_image2');  // $('img')[0]
//               img2.src = URL.createObjectURL(this.files[0]); // set src to file url
               
         
    
        
//             }
    
//         }); 
//     });
    
//     });
    
    window.addEventListener('load', function() {
        document.querySelector('.upload_case1').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                var img = document.querySelector('.myImg');  // $('img')[0]
                img.src = URL.createObjectURL(this.files[0]); // set src to file url
                img.onload = imageIsLoaded; // optional onload event listener

                var img = document.querySelector('.myImg');  // $('img')[0]
                              img.src = URL.createObjectURL(this.files[0]); // set src to file url
                               
                              var img = document.querySelector('.pop_up');  // $('img')[0]
                              img.src = URL.createObjectURL(this.files[0]); // set src to file url
                          
            }
        });
      });


      window.addEventListener('load', function() {
        document.querySelector('.upload_case2').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                var img2 = document.querySelector('.myImg2');  // $('img')[0]
                img2.src = URL.createObjectURL(this.files[0]); // set src to file url
                img2.onload = imageIsLoaded2; // optional onload event listener

                var img2 = document.querySelector('.myImg2');  // $('img')[0]
                              img2.src = URL.createObjectURL(this.files[0]); // set src to file url
                               
                         
            }
        });
      });
      function imageIsLoaded(e) { alert(e); }
      function imageIsLoaded2(e) { alert(e); }
      



  cards.forEach(card => card.addEventListener('click', flipCard));
$(document).ready(function () {
    ;
});


$(document).ready(function () {
    $(".vue").click(function () {

    });
});








