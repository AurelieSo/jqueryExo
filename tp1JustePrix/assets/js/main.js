$(document).ready(function(){
var randomNumber = Math.floor(Math.random() *100)+ 1;
// générer un chiffre aléatoire entre 1 et 100 
console.log(randomNumber);
// pour pouvoir vérifier dans la console

var i = 0;
//  on crée un compteur :  i = compteur = itération
// on définit le compteur à 0

    $("#start").click(function(){
        i++;
        // i on augmente sa valeur de 1
        console.log(i);
        // vérifier dans console
        var inputNumber = $("#attempt").val();


        // Test de la valeur
        if (isNaN(inputNumber) == false) {
            if (inputNumber > randomNumber){
                alert("C'est moins");
            }
            else if(inputNumber < randomNumber){
                alert("C'est plus");
            }
            else{
                alert("C'est gagné ! Le chiffre a était trouvé après" +i+ "tentatives");
            }
        }
        
        else {
        alert("Merci de saisir un nombre");
        

        }

    })




})



// $('document').ready(function(){

//     $("number").load(function() {
//         var minNumber = 1; // le minimum
//         var maxNumber = 100; // le maximum
//         var number = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // la fonction magique

//         // $('#attempt').val(number)

//             $('#test').submit(function(){
      
//                 if ($("#attempt").val() == $("number").val){
//                 alert("Gagné");
//                 }

//                 else if ($("#attempt").val() <$("number").val){
//                 alert("Plus grand");
//                 }

//                 else{
//                 alert("Plus petit");

//                 }

//             });
        

//          });
//     });