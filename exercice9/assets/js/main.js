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
    })

})