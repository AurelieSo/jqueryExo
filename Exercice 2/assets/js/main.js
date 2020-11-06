

// dès que mon doc est chargé, il applique le code entre les accolades, mettre le script à la fin de la page $(document).ready(function() {

$(document).ready(function() {
    $('#text').show();
    $('#text').removeAttr('hidden');
});

// la ligne 2 on met un display block donc afficher le Text
// la ligne 3 on change le css qui est appliqué dans le html
// removeAttr : pour modifier css