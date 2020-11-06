// version1
$(document).ready(function(){
    
    $(document).mouseover(function(){
    $('img').css('transform', 'scale(2)');

    $(document).mouseout(function(){
    $('img').css('transform', 'scale(1)');
    })
    });
});


// version2 ne amrche pas 
// $(document).ready(function(){
    
//     $(document).mouseover(function(){
//     $('lion').width();
//     $(this).attr('width', $(this).attr('width')*2).appendTo('lion');
//     });
// });
