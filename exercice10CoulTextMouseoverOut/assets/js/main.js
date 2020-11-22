
// ma version beaucoup trop longue
// $(document).ready(function(){

//     $("#green").mouseover(function(){
       
//         $("text").children().removeClass().addClass('.green');
        
//         $("p").css({
//         color : 'green',
//         });
//     });   
//     $("#green").mouseout(function(){
       
//         $("text").children().removeClass().addClass('.green');
        
//         $("p").css({
//         color : 'black',
//         });
//     });  
        
//     $("#red").mouseover(function(){

//         $("text").children().removeClass().addClass('.red');
                
//         $("p").css({
//             color : 'red'
//         });
//     });
//     $("#red").mouseout(function(){
       
//         $("text").children().removeClass().addClass('.red');
        
//         $("p").css({
//         color : 'black',
//         });
//     });  
//     $("#blue").mouseover(function(){

//             $("text").children().removeClass().addClass('.blue');
                        
//             $("p").css({
//                 color : 'blue',
//             });
//     });
//     $("#blue").mouseout(function(){

//         $("text").children().removeClass().addClass('.blue');
                    
//         $("p").css({
//             color : 'black',
//         });
// });
// });

// correction
$(document).ready(function(){
    $('.color').mouseover(function(){
        $('#text').css('color', this.id);
    });
    $('.color').mouseout(function(){
        $('#text').css('color', 'black');
    });

})



 
       
