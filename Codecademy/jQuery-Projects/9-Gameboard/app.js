var main = function() {
	$("a.more-btn").click(function() {
    $(this).next().toggle('200');
  });
  $(".share").click(function() {
    $(this).next().toggle('200');
  });
  $(".glyphicon-bell").click(function() {
    $(this).toggleClass('active');
  });
};

$(document).ready(main);