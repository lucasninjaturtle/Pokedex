const apilink2 = 'https://pokeapi.co/api/v2/pokemon/';

var inputText2 = document.querySelector('#inputText2');

var clickForm2 = document.querySelector('#clickForm2');

var cartaDos = document.querySelector('#cartaDos');
var nombre2 = document.querySelector('#nombre2');

clickForm2.addEventListener('click', function(){
    var LinkBusqueda2 = apilink2 + inputText2.value.toLowerCase();

    fetch(LinkBusqueda2) // en el fetch las siuiebtes lineas comentadas son casi ssiempre iguales//
    .then(respuesta2 => respuesta2.json()) //
    .then(objeto2 =>{
        cartaDos.src = (objeto2.sprites.front_default)
        nombre2.innerText = objeto2.name;

    })
    
    
    
    
    .catch(err => {
    nombre2.innerText = 'No existe ese pokemon'
    cartaDos.src = "https://i.pinimg.com/originals/78/67/26/78672649e70956978ff0dbaedaef76fa.png"
    })
})

