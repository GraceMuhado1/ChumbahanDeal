<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>upload</title>
    <!-- <link href="style.css" rel="stylesheet" type="text/css"> -->
    <script src="jquery-3.3.1.min.js"></script>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
  <!-- Bootstrap core CSS -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <!-- Material Design Bootstrap -->
  <link href="css/mdb.min.css" rel="stylesheet">
  <!-- Your custom styles (optional) -->
  <link href="css/style.css" rel="stylesheet">
  



  <script src="https://code.jquery.com/jquery-1.8.3.min.js"
    integrity="sha256-YcbK69I5IXQftf/mYD8WY0/KmEDCv1asggHpJk1trM8=" crossorigin="anonymous"></script>

  <link rel="stylesheet" href="upload.css">

  <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
  <script src="https://cdn.rawgit.com/nnattawat/flip/master/dist/jquery.flip.min.js"></script>



  <script src="https://code.jquery.com/jquery-1.8.3.min.js"
    integrity="sha256-YcbK69I5IXQftf/mYD8WY0/KmEDCv1asggHpJk1trM8=" crossorigin="anonymous"></script>

   
    <style>
.enter_number{
  width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: block;
}



</style>
   <script type="text/javascript">
        $(document).ready(function(){

            $("#but_upload").click(function(){

                var fd = new FormData();

                var files = $('#file')[0].files[0];

                fd.append('file',files);

                 $.ajax({
                    url:'https://chums.live/chumbahan/briefcase/upload.php',
                    type:'post',
                    data:fd,
                    contentType: false,
                    processData: false,
                    success:function(response){
                        if(response != 0){
                            $("#img_upload").attr("src",response);
                            $('.preview img').show();
                        }else{
                            alert('File not uploaded');
                        }
                    }
                });
            });
         
         //row2-------------
            $("#upload2").click(function(){

var fd2 = new FormData();

var files2 = $('#file2')[0].files[0];

fd2.append('file',files2);

$.ajax({
    url:'https://chums.live/chumbahan/briefcase/upload.php',
    type:'post',
    data:fd2,
    contentType: false,
    processData: false,
    success:function(response){
        if(response != 0){
            $("#img_upload2").attr("src",response);
            $('.preview2 img').show();
        }else{
            alert('File not uploaded');
        }
    }
});
});
      
       //row3-------------
         $("#upload3").click(function(){

var fd3 = new FormData();

var files3 = $('#file3')[0].files[0];

fd3.append('file',files3);

$.ajax({
    url:'https://chums.live/chumbahan/briefcase/upload.php',
    type:'post',
    data:fd3,
    contentType: false,
    processData: false,
    success:function(response){
        if(response != 0){
            $("#img_upload3").attr("src",response);
            $('.preview3 img').show();
        }else{
            alert('File not uploaded');
        }
    }
});
});


        //row4-------------
        $("#upload4").click(function(){

var fd4 = new FormData();

var files4 = $('#file4')[0].files[0];

fd4.append('file',files4);

$.ajax({
    url:'https://chums.live/chumbahan/briefcase/upload.php',
    type:'post',
    data:fd4,
    contentType: false,
    processData: false,
    success:function(response){
        if(response != 0){
            $("#img_upload4").attr("src",response);
            $('.preview4 img').show();
        }else{
            alert('File not uploaded');
        }
    }
});
});
      

          //row5-------------
          $("#upload5").click(function(){

var fd5 = new FormData();

var files5 = $('#file5')[0].files[0];

fd5.append('file',files5);

$.ajax({
    url:'https://chums.live/chumbahan/briefcase/upload.php',
    type:'post',
    data:fd5,
    contentType: false,
    processData: false,
    success:function(response){
        if(response != 0){
            $("#img_upload5").attr("src",response);
            $('.preview5 img').show();
        }else{
            alert('File not uploaded');
        }
    }
});
});

   //row6-------------
   $("#upload6").click(function(){

var fd6 = new FormData();

var files6 = $('#file6')[0].files[0];

fd6.append('file',files6);

$.ajax({
    url:'https://chums.live/chumbahan/briefcase/upload.php',
    type:'post',
    data:fd6,
    contentType: false,
    processData: false,
    success:function(response){
        if(response != 0){
            $("#img_upload6").attr("src",response);
            $('.preview6 img').show();
        }else{
            alert('File not uploaded');
        }
    }
});
});

//row7-------------
$("#upload7").click(function(){

var fd7 = new FormData();

var files7 = $('#file7')[0].files[0];

fd7.append('file',files7);

$.ajax({
    url:'https://chums.live/chumbahan/briefcase/upload.php',
    type:'post',
    data:fd7,
    contentType: false,
    processData: false,
    success:function(response){
        if(response != 0){
            $("#img_upload7").attr("src",response);
            $('.preview7 img').show();
        }else{
            alert('File not uploaded');
        }
    }
});
});

//row8-------------
$("#upload8").click(function(){

var fd8 = new FormData();

var files8 = $('#file8')[0].files[0];

fd8.append('file',files8);

$.ajax({
    url:'https://chums.live/chumbahan/briefcase/upload.php',
    type:'post',
    data:fd8,
    contentType: false,
    processData: false,
    success:function(response){
        if(response != 0){
            $("#img_upload8").attr("src",response);
            $('.preview8 img').show();
        }else{
            alert('File not uploaded');
        }
    }
});
});

//row9-------------
$("#upload9").click(function(){

var fd9 = new FormData();

var files9 = $('#file9')[0].files[0];

fd9.append('file',files9);

$.ajax({
    url:'https://chums.live/chumbahan/briefcase/upload.php',
    type:'post',
    data:fd9,
    contentType: false,
    processData: false,
    success:function(response){
        if(response != 0){
            $("#img_upload9").attr("src",response);
            $('.preview9 img').show();
        }else{
            alert('File not uploaded');
        }
    }
});
});

//row9-------------
$("#upload10").click(function(){

var fd10 = new FormData();

var files10 = $('#file10')[0].files[0];

fd10.append('file',files10);

$.ajax({
    url:'https://chums.live/chumbahan/briefcase/upload.php',
    type:'post',
    data:fd10,
    contentType: false,
    processData: false,
    success:function(response){
        if(response != 0){
            $("#img_upload10").attr("src",response);
            $('.preview10 img').show();
        }else{
            alert('File not uploaded');
        }
    }
});
});

        });



    </script>

</head>
<body>

<div class="card enter_number "  style = "background-color:#1a237e" >
        <div class="card-body">
            <h5 class="card-title text-info">Phase1</h5>
          <h5 class="card-title" style="color:white">Enter number of player of the day.</h5>
           <form action = "phase1.html" target = "blank">
              <input type = "text" id = "txt"/>
              <input type = "submit" value = "submit" onclick = "passvalue()" class ="btn peach-gradient"/>
              </form>
    
<div class = "phase2" style = "margin-top: 90px;">
           
              <h5 class="card-title text-info">Phase2</h5>
          <h5 class="card-title" style="color:white">Enter Prizes</h5>
 

        <form method="post" action="finalround.html" enctype="multipart/form-data" id="myform" target = "blank">
 <div class="container">
    <div class="row">
        <div class="col">
    
        <div class="row">
        <div class="col col-example">
        <div class="row">
        <div class="col-4"> <img src="assets/numbers/1.png" ></div>
        <div class="col-4">
          <label class="btn btn peach-gradient btn-rounded upload-btn label-input">select image
            <input type="file" size="60" class="upload_case4"  id="file" name="file" >
              </label> 
            </div>
       </div>
        </div>
        <div class="col col-example"> 
                    <input type="button" class="button label-input btn peach-gradient" value="Upload" id="but_upload" >
                    <!-- <input type = "submit" value = "click" onclick = "passhtml()"/>  -->
                  </div>
          </div>
        </div>
    
        <div class="col preview" id ="preview">
        <img src="#" id="img_upload" width="100" height="100">
          </div>
        </div>

<!----------------second row----------------->

<div class="row">
        <div class="col">
    
        <div class="row">
        <div class="col col-example">
        <div class="row">
        <div class="col-4"> <img src="assets/numbers/2.png" ></div>
        <div class="col-4">
          <label class="btn btn peach-gradient btn-rounded upload-btn label-input">select image
            <input type="file" size="60" class="upload_case4"  id="file2" name="file" >
              </label> 
            </div>
       </div>
        </div>
        <div class="col col-example"> 
                    <input type="button" class="button label-input btn peach-gradient" value="Upload" id="upload2" >
                    <!-- <input type = "submit" value = "click" onclick = "passhtml()"/>  -->
                  </div>
          </div>
        </div>
    
        <div class="col preview2" id ="preview">
        <img src="#" id="img_upload2" width="100" height="100">
          </div>
        </div>

        <!----------------3rd row----------------->

<div class="row">
        <div class="col">
    
        <div class="row">
        <div class="col col-example">
        <div class="row">
        <div class="col-4"> <img src="assets/numbers/3.png" ></div>
        <div class="col-4">
          <label class="btn btn peach-gradient btn-rounded upload-btn label-input">select image
            <input type="file" size="60" class="upload_case4"  id="file3" name="file3" >
              </label> 
            </div>
       </div>
        </div>
        <div class="col col-example"> 
                    <input type="button" class="button label-input btn peach-gradient" value="Upload" id="upload3" >
                    <!-- <input type = "submit" value = "click" onclick = "passhtml()"/>  -->
                  </div>
          </div>
        </div>
    
        <div class="col preview" id ="preview3">
        <img src="#" id="img_upload3" width="100" height="100">
          </div>
        </div>


        
        <!----------------4th row----------------->

<div class="row">
        <div class="col">
    
        <div class="row">
        <div class="col col-example">
        <div class="row">
        <div class="col-4"> <img src="assets/numbers/4.png" ></div>
        <div class="col-4">
          <label class="btn btn peach-gradient btn-rounded upload-btn label-input">select image
            <input type="file" size="60" class="upload_case4"  id="file4" name="file4" >
              </label> 
            </div>
       </div>
        </div>
        <div class="col col-example"> 
                    <input type="button" class="button label-input btn peach-gradient" value="Upload" id="upload4" >
                    <!-- <input type = "submit" value = "click" onclick = "passhtml()"/>  -->
                  </div>
          </div>
        </div>
    
        <div class="col preview" id ="preview4">
        <img src="#" id="img_upload4" width="100" height="100">
          </div>
        </div>

        
        
        <!----------------5th row----------------->

<div class="row">
        <div class="col">
    
        <div class="row">
        <div class="col col-example">
        <div class="row">
        <div class="col-4"> <img src="assets/numbers/5.png" ></div>
        <div class="col-4">
          <label class="btn btn peach-gradient btn-rounded upload-btn label-input">select image
            <input type="file" size="60" class="upload_case4"  id="file5" name="file5" >
              </label> 
            </div>
       </div>
        </div>
        <div class="col col-example"> 
                    <input type="button" class="button label-input btn peach-gradient" value="Upload" id="upload5" >
                    <!-- <input type = "submit" value = "click" onclick = "passhtml()"/>  -->
                  </div>
          </div>
        </div>
    
        <div class="col preview" id ="preview5">
        <img src="upload/rename.png" id="img_upload5" width="100" height="100">
          </div>
        </div>

            
        <!----------------6th row----------------->

<div class="row">
        <div class="col">
    
        <div class="row">
        <div class="col col-example">
        <div class="row">
        <div class="col-4"> <img src="assets/numbers/6.png" ></div>
        <div class="col-4">
          <label class="btn btn peach-gradient btn-rounded upload-btn label-input">select image
            <input type="file" size="60" class="upload_case4"  id="file6" name="file6" >
              </label> 
            </div>
       </div>
        </div>
        <div class="col col-example"> 
                    <input type="button" class="button label-input btn peach-gradient" value="Upload" id="upload6" >
                    <!-- <input type = "submit" value = "click" onclick = "passhtml()"/>  -->
                  </div>
          </div>
        </div>
    
        <div class="col preview" id ="preview6">
        <img src="#" id="img_upload6" width="100" height="100">
          </div>
        </div>


             <!----------------7th row----------------->

<div class="row">
        <div class="col">
    
        <div class="row">
        <div class="col col-example">
        <div class="row">
        <div class="col-4"> <img src="assets/numbers/7.png" ></div>
        <div class="col-4">
          <label class="btn btn peach-gradient btn-rounded upload-btn label-input">select image
            <input type="file" size="60" class="upload_case4"  id="file7" name="file7" >
              </label> 
            </div>
       </div>
        </div>
        <div class="col col-example"> 
                    <input type="button" class="button label-input btn peach-gradient" value="Upload" id="upload7" >
                    <!-- <input type = "submit" value = "click" onclick = "passhtml()"/>  -->
                  </div>
          </div>
        </div>
    
        <div class="col preview" id ="preview7">
        <img src="#" id="img_upload7" width="100" height="100">
          </div>
        </div>


                 <!----------------8th row----------------->

<div class="row">
        <div class="col">
    
        <div class="row">
        <div class="col col-example">
        <div class="row">
        <div class="col-4"> <img src="assets/numbers/8.png" ></div>
        <div class="col-4">
          <label class="btn btn peach-gradient btn-rounded upload-btn label-input">select image
            <input type="file" size="60" class="upload_case4"  id="file8" name="file8" >
              </label> 
            </div>
       </div>
        </div>
        <div class="col col-example"> 
                    <input type="button" class="button label-input btn peach-gradient" value="Upload" id="upload8" >
                    <!-- <input type = "submit" value = "click" onclick = "passhtml()"/>  -->
                  </div>
          </div>
        </div>
    
        <div class="col preview" id ="preview8">
        <img src="#" id="img_upload8" width="100" height="100">
          </div>
        </div>

                 <!----------------9th row----------------->

                 <div class="row">
        <div class="col">
    
        <div class="row">
        <div class="col col-example">
        <div class="row">
        <div class="col-4"> <img src="assets/numbers/9.png" ></div>
        <div class="col-4">
          <label class="btn btn peach-gradient btn-rounded upload-btn label-input">select image
            <input type="file" size="60" class="upload_case4"  id="file9" name="file9" >
              </label> 
            </div>
       </div>
        </div>
        <div class="col col-example"> 
                    <input type="button" class="button label-input btn peach-gradient" value="Upload" id="upload9" >
                    <!-- <input type = "submit" value = "click" onclick = "passhtml()"/>  -->
                  </div>
          </div>
        </div>
    
        <div class="col preview" id ="preview9">
        <img src="#" id="img_upload9" width="100" height="100">
          </div>
        </div>

                       <!----------------10th row----------------->

                       <div class="row">
        <div class="col">
    
        <div class="row">
        <div class="col col-example">
        <div class="row">
        <div class="col-4"> <img src="assets/numbers/10.png" ></div>
        <div class="col-4">
          <label class="btn btn peach-gradient btn-rounded upload-btn label-input">select image
            <input type="file" size="60" class="upload_case4"  id="file10" name="file10" >
              </label> 
            </div>
       </div>
        </div>
        <div class="col col-example"> 
                    <input type="button" class="button label-input btn peach-gradient" value="Upload" id="upload10" >
                    <!-- <input type = "submit" value = "click" onclick = "passhtml()"/>  -->
                  </div>
          </div>
        </div>
    
        <div class="col preview" id ="preview10">
        <img src="#" id="img_upload10" width="100" height="100">
          </div>
        </div>


 <input type = "submit" value = "submit" onclick = "passhtml()"  class="button label-input btn purple-gradient"/> 
      </div>
  </div>

      </form>
    
        </div>
      </div>

   
<script>

function passvalue(){
var firstname = document.getElementById("txt").value;


localStorage.setItem("textvalue" , firstname);

return false;

  }

  function passhtml(){
var upload1 = document.getElementById("img_upload").src;
localStorage.setItem("uploadna" , upload1);



var upload2 = document.getElementById("img_upload2").src;
localStorage.setItem("uploadna2" , upload2);

var upload3 = document.getElementById("img_upload3").src;
localStorage.setItem("uploadna3" , upload3);

var upload4 = document.getElementById("img_upload4").src;
localStorage.setItem("uploadna4" , upload4);

var upload5 = document.getElementById("img_upload5").src;
localStorage.setItem("uploadna5" , upload5);


var upload6 = document.getElementById("img_upload6").src;
localStorage.setItem("uploadna6" , upload6);

var upload7 = document.getElementById("img_upload7").src;
localStorage.setItem("uploadna7" , upload7);

var upload8 = document.getElementById("img_upload8").src;
localStorage.setItem("uploadna8" , upload8);

var upload9 = document.getElementById("img_upload9").src;
localStorage.setItem("uploadna9" , upload9);

var upload10 = document.getElementById("img_upload10").src;
localStorage.setItem("uploadna10" , upload10);



return false;

  }

 
    </script>

    <!-- <script src="finalround.js"></script> -->
    <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
      <!-- Bootstrap tooltips -->
      <script type="text/javascript" src="js/popper.min.js"></script>
      <!-- Bootstrap core JavaScript -->
      <script type="text/javascript" src="js/bootstrap.min.js"></script>
      <!-- MDB core JavaScript -->
      <script type="text/javascript" src="js/mdb.min.js"></script>

</body>
</html>