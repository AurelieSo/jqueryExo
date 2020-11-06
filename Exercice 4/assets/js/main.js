$(document).ready(function(){
    $('#firstText').empty();
    $('#secondText').remove();
})

// La méthode remove () supprime les éléments inclus, y compris tout le texte et les nœuds enfants.
// Cette méthode supprime également les données et les événements des éléments sélectionnés.
// Conseil: pour supprimer les éléments sans supprimer les données et les événements, utilisez plutôt la méthode detach () .

// La méthode empty () supprime tous les nœuds enfants et le contenu des éléments inclus.
// Remarque: cette méthode ne supprime pas lui-même ni ses attributs.
// Conseil: pour supprimer les éléments sans supprimer les données et les événements, utilisez la méthode detach () .
