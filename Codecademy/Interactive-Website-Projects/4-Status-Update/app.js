var main = function() {
  $(".btn").click(function() {
    post = $(".status-box").val(); //save input into variable 'post'
    $("<li>").text(post).prependTo(".posts");
    $(".status-box").val(""); //clear status input box
    $(".counter").text(140); //reset counter after the keyup function below is run
    $(".btn").addClass("disabled"); // disable post button after post submit and page reload
  });

  $(".status-box").keyup(function() {
    postLength = $(this).val().length; //count how many characters used
    charactersLeft = 140 - postLength;
    $(".counter").text(charactersLeft); //update counter class with characters left.
    if (charactersLeft < 0 || charactersLeft === 140) {
      $(".btn").addClass("disabled");
    } else {
      $(".btn").removeClass("disabled");
    }
  });
  
  $(".btn").addClass("disabled"); //disable post button on initial load
  
};

$(document).ready(main);
