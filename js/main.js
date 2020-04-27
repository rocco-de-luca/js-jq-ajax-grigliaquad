/**
 * Griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato
*/
$(document).ready(function () {
    //refs
    var item = $(".item");
    var apiRandomNumber = 'https://flynn.boolean.careers/exercises/api/random/int';//"https://www.random.org/integers/?num=1&min=1&max=9&col=1&base=10&format=plain&rnd=new";
    item.click(function () {
        var self = $(this);
        $.ajax({
            url: apiRandomNumber,
            //sono io che richiedo dei dati
            method: 'GET',
            success: function (data) {
                var randomNumber = data.response;
                console.log(randomNumber)
                if(self.text() === "0" ){
                    self.text(randomNumber)
                }
                if (randomNumber <= 5) {
                    self.addClass('diventaGiallo').removeClass('diventaVerde');
                } else {
                    self.addClass('diventaVerde').removeClass('diventaGiallo');
                }
            },

            error: function (error) {
                alert("errore chiamata API");
            }
        }); // fine chiamata AJAX
    });
}); //<-- end document ready

/*
//function

function setItem(clickItem, randomNum) {
$(clickItem).html(randomNum);
if (randomNum <= 5) {
    $(clickItem).addClass('diventaGiallo').removeClass('diventaVerde');
} else {
    $(clickItem).addClass('diventaVerde').removeClass('diventaGiallo');
}
}

*/



