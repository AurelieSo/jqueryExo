// debut de ma version
// $(document).ready(function(){

//     $("#green").click(function(){
       
//         $("text").children().removeClass().addClass('.colorGreen');
        
//         $("p").css({
//         color : 'green',
//         });
//     });    
        
//     $("#red").click(function(){

//         $("text").children().removeClass().addClass('.colorRed');
                
//         $("p").css({
//             color : 'red'
//         });
//     });

//     $("#blue").click(function(){

//             $("text").children().removeClass().addClass('.colorBlue');
                        
//             $("p").css({
//                 color : 'blue',
//             });
//     });
// });

// fin de ma version



//  correction version 1
// $(document).ready(function(){
//     $('green').click(function() {
//         $('#texte').css('color', 'green');
//     });

// })
       
// correction version2 plus simple
$(document).ready(function(){
    $('.color').click(function(){
        // quand on clic sur un eltm qui a une couleur
    var divColor=$(this).attr('id');
        $('#text').css('color', divColor);
        // la couleur est egale à l'id de la div
        // l'id comprend la couleur
        // il faut créer les ccs couleur
    })

})

// autre version d'écriture en optimisant le code
// ici le this fait référence a ce qui est devant dans la parenthèse
// le this.id = ligne 48 = $(this).attr('id');
// le this est l'élément dans lequel on est actuellement ici color
$(document).ready(function(){
    $('.color').click(function(){
        $('#text').css('color', this.id);
    })
})
