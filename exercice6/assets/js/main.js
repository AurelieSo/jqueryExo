// version1
// $ pour dire qu'on est en jquery
// pour dire d'attendre que e doc soit chargé avant de faire la function
$(document).ready(function(){
    // quand je passe sur l'image dont l'id est lion avec la souris
    $("#lion").mouseover(function(){
        // $("#lion").css("width", "+=10%"); veut dire la même chose que la ligne suivante, avec this on cible l'id lion
        $(this).css('width', '+=10%');
        
    })
})

// explications supplémentaires
var a =5;
a = a +10; //a est égal à 15
a +=10;//a est égal à lui-même (5) plus 10

var b= 'Bonjour';
b = b + 'à tous !';

var b= 'Bonjour';
b += 'à tous';
// les deux versions veulent dire la même chose