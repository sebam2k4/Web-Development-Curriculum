var main = function() {
  	var cities = ['Chicago', 'New York', 'Castlebar', 'Tokyo', 'Denver', 'Krakow', 'St. Louis'];
    cities.sort();
  
    $("#location").autocomplete({
        source: cities
    });
};
$(document).ready(main);
