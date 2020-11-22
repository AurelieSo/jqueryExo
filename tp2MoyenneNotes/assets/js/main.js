// Demander à l'aide d'un formulaire les 5 dernières notes d'un élève.
// Calculer sa moyenne et déterminer son appréciation.

//     Si la moyenne de l'élève est supérieure ou égale à 0 et inférieure à 10, il aura comme appréciation : En dessous de la moyenne.
//     Si la moyenne de l'élève est supérieure ou égale à 10 et inférieure à 13, il aura comme appréciation : Moyen.
//     Si la moyenne de l'élève est supérieure ou égale à 13 et inférieure à 16, il aura comme appréciation : Bien.
//     Si la moyenne de l'élève est supérieure ou égale à 16 et inférieure à 20, il aura comme appréciation : Très bien.
//     Si la moyenne de l'élève est égale à 20, il aura comme appréciation : Excellent.

// Afficher la moyenne et l'appréciation de l'élève.


// ma version
// $(document).ready(function() {
//     $("#calculer").click(function(){

//     var firstNote =  $('#firstNote').val();
//     var secondNote = $('#secondNote').val();
//     var thirdNote = $('#thirdNote').val();
//     var fourthNote = $('#fourthNote').val();
//     var fifthNote = $('#fifthNote').val();

//     var resultat = ((firstNote + secondNote + thirdNote + fourthNote + fifthNote) / 5);
    
//         // console.log(resultat.val)
//         alert("votre moyenne est " + $(resultat).val());

//     });
// });

// correction
$(document).ready(function() {
    $("#calculer").click(function(){

        var firstNote =  $('#firstNote').val();
        var secondNote = $('#secondNote').val();
        var thirdNote = $('#thirdNote').val();
        var fourthNote = $('#fourthNote').val();
        var fifthNote = $('#fifthNote').val();

        if(firstNote && secondNote && thirdNote && fourthNote && fifthNote && parseFloat(firstNote) <=20 && parseFloat(secondNote) <=20 && parseFloat(thirdNote) <=20 && parseFloat(fourthNote) <=20 && parseFloat(fifthNote) <=20)
        // il vérifie qu'elle n'est pas vide et pas fausse
        // et aussi que les notes sont comprises entre 0 et 20
    // || veut dire pipe veut dire "ou" quand on fait des test

        var resultat = (parseFloat(firstNote)+ parseFloat(secondNote) + parseFloat(thirdNote) + parseFloat(fourthNote) + parseFloat(fifthNote)) / 5;
        // prendre la valeur numérique de chaque champ, en fait on lui précise que c'est du chiffre, si on mets du texte la valeur sera 0
        // parseFloat : chiffre avec virgule 
        // parseInt : chiffre entier sans virgule

        if(resultat < 10)
        alert("Votre moyenne est de : " + resultat +  "\n" + "Appréciation : En dessous de la moyenne.");

        else if(resultat >=10 && resultat < 13)
        alert("Votre moyenne est de : " + resultat +  "\n" +"Appréciation : Moyen");
       
        else if(resultat >=13 && resultat <16)
        alert("Votre moyenne est de : " + resultat +  "\n" + "Appréciation : Bien");

        else if(resultat >=16 && resultat <20)
        alert("Votre moyenne est de : " + resultat +  "\n" +"Appréciation : Très Bien");

        else if(resultat == 20)
        alert("Votre moyenne est de : " + resultat +  "\n" +"Appréciation : Excellent");



        else{
        alert("Veuillez rentrer toutes les notes comprises entre 0 et 20")
        }

        {


        }
    
})
});


// alert la mise en page ne peut pas être changé