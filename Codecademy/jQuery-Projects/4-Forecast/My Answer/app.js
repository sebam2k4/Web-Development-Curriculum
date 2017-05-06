var main = function() {
  $(".day").click(function() {
    $(this).next().toggle(); // toggle only day clicked (this). use .next() for next sibling which is div.hourly
    $(this).find("span").toggleClass("glyphicon-minus");
  });
};

$(document).ready(main);