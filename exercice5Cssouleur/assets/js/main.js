
// tous les li ont une couleur rouge
$(document).ready(function(){
    $('li').css('color', 'red');
});

// toutes les balises dans le ul seront rouges
// tous les enfants de ul seront rouges
$(document).ready(function(){
    $('ul').children().css('color', 'red');
});