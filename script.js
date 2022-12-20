let holes = $('.hole');
let scoreBoard = $('.score');
let moles = $('.mole');
let button = $('#startGame');
let departSecondes = 9
let temps = departSecondes * 11
let img = document.createElement('img');

button.ready(function() {
    $.startGame = function (){
        let int = setInterval(() => {
            //Création du compte à rebours 9 à 0 secondes
            let secondes = parseInt(temps % 10, 10)
            secondes = secondes < 10 ? + secondes : secondes
            console.log("Secondes " + `${secondes}`);
            temps = temps <= 9 ? 9 : temps - 1
            //Selection random du trou
            let hole = holes[Math.floor(Math.random()*holes.length)];
            console.log(hole);
            //Disparition des trous
            hole = $('.hole').addClass('up').hide();
            //Fin de partie quand le compte à rebours est à 0
            if (secondes === 0) {
                return clearInterval(int) & alert("La partie est terminée !");
            }
        }, 1000);
    }
    //Lancement de la fonction
    button.click(function (){
        $.startGame();
    })
})

