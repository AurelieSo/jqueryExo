
$(document).ready(function(){

    $("#green").click(function(){
       
        $("text").children().removeClass().addClass('.colorGreen');
        
        $("p").css({
        color : 'green',
        });
    });    
        
    $("#red").click(function(){

        $("text").children().removeClass().addClass('.colorRed');
                
        $("p").css({
            color : 'red'
        });
    });

    $("#blue").click(function(){

            $("text").children().removeClass().addClass('.colorBlue');
                        
            $("p").css({
                color : 'blue',
            });
    });
});



// toutes les balises dans le ul seront rouges
// tous les enfants de ul seront rouges
$(document).ready(function(){
    $('ul').children().css('color', 'red');
});




 
       
