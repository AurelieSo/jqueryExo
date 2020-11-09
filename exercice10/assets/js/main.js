
$(document).ready(function(){

    $("#green").mouseover(function(){
       
        $("text").children().removeClass().addClass('.colorGreen');
        
        $("p").css({
        color : 'green',
        });
    });   
    $("#green").mouseout(function(){
       
        $("text").children().removeClass().addClass('.colorGreen');
        
        $("p").css({
        color : 'black',
        });
    });  
        
    $("#red").mouseover(function(){

        $("text").children().removeClass().addClass('.colorRed');
                
        $("p").css({
            color : 'red'
        });
    });
    $("#red").mouseout(function(){
       
        $("text").children().removeClass().addClass('.colorRed');
        
        $("p").css({
        color : 'black',
        });
    });  
    $("#blue").mouseover(function(){

            $("text").children().removeClass().addClass('.colorBlue');
                        
            $("p").css({
                color : 'blue',
            });
    });
    $("#blue").mouseout(function(){

        $("text").children().removeClass().addClass('.colorBlue');
                    
        $("p").css({
            color : 'black',
        });
});
});





 
       
