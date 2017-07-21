$(document).ready(function() {
  $("#left-img img").hover(function() {
    $(this).attr("src", "images/Dio-left-img-Horns.jpg");
    }, function () {
      $("#left-img img").attr("src","images/Dio-left-img.jpg");
    })
      $("#center-img img").hover(function() {
    $(this).attr("src", "images/Dio-center-img-Horns.jpg");
    }, function () {
      $("#center-img img").attr("src","images/Dio-center-img.jpg");
    })
      $("#right-img img").hover(function() {
    $(this).attr("src", "images/Dio-right-img-Horns.jpg");
    }, function () {
      $("#right-img img").attr("src","images/Dio-right-img.jpg");
    })
});