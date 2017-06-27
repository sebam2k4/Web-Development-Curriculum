var main = function() {
	$("#top-text").keyup(function() {
    var topText = $("input[type=text]#top-text").val(); 
      $(".top-caption").text(topText);
  });
  $("#bottom-text").keyup(function() {
    var bottomText = $("input[type=text]#bottom-text").val(); 
      $(".bottom-caption").text(bottomText);
  });
  $("#image-url").keyup(function() {
    var image = $("input[type=text]#image-url").val(); 
      $("img#meme").attr("src", image);
    });
};
 
$(document).ready(main);