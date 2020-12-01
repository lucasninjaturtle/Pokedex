const apilink = 'https://pokeapi.co/api/v2/pokemon/';

var inputText = document.querySelector('#inputText');

var clickForm = document.querySelector('#clickForm');

var cartaUno = document.querySelector('#cartaUno');
var nombre1 = document.querySelector('#nombre1');
var pokemon1 = {};
var pokemon2 = {};
var pelea = document.querySelector('');



clickForm.addEventListener('click', function(){
    var LinkBusqueda = apilink + inputText.value.toLowerCase();

    fetch(LinkBusqueda) // en el fetch las siuiebtes lineas comentadas son casi ssiempre iguales//
    .then(respuesta => respuesta.json()) //
    .then(objeto =>{
        cartaUno.src = (objeto.sprites.front_default)
        nombre1.innerText = objeto.name;
        //agregar en la carta 2
        var statsHp = document.querySelector('#hp1');
        var textoHp = objeto.stats[0].base_stat
        statsHp.innerHTML = 'HP: ' + textoHp
        document.querySelector("#carta").appendChild(statsHp)

        var attHp = document.querySelector('#att1');
        var texto = objeto.stats[1].base_stat
        attHp.innerHTML = 'Att: ' + texto
        document.querySelector("#carta").appendChild(attHp)

        pokemon1 = {
            name: objeto.name,
            hp: objeto.stats[0].base_stat,
            att: objeto.stats[1].base_stat,
            velocidad: objeto.stats[1].base_stat,
        }

    })
    
    
    
    
    .catch(err => {
    nombre1.innerText = 'No existe ese pokemon'
    cartaUno.src = "https://i.pinimg.com/originals/78/67/26/78672649e70956978ff0dbaedaef76fa.png"
    })
})


// stats => stats[0].base_stat => hp

// stats => stats[1].base_stat => attack




