var poke1=document.getElementById('poke1');
var nombre1=document.getElementById('nombre1');
var habilidad1=document.getElementById('habilidad1');
var mov1=document.getElementById('mov1');

var poke2=document.getElementById('poke2');
var nombre2=document.getElementById('nombre2');
var habilidad2=document.getElementById('habilidad2');
var mov2=document.getElementById('mov2');


var random=(min,max) => {
    return Math.floor(Math.random()*(max-min)+min)
}
var random2=(min,max) => {
    return Math.floor(Math.random()*(max-min)+min)
}

function poke(){
    var poke=random(0,898)
    console.log(poke);
    var link='https://pokeapi.co/api/v2/pokemon/' + poke;
    fetch(link)
    .then(response => response.json())
    .then(function(data){
        poke1.src=data.sprites.other["official-artwork"].front_default
        nombre1.innerHTML=data.species.name
        habilidad1.innerHTML=data.abilities[0].ability.name
        mov1.innerHTML=data.moves[0].move.name
        console.log(data);
    })

    var pokes=random2(0,898)
    console.log(pokes);
    var link2='https://pokeapi.co/api/v2/pokemon/' + pokes;
    fetch(link2)
    .then(response => response.json())
    .then(function(data){
        poke2.src=data.sprites.other["official-artwork"].front_default
        nombre2.innerHTML=data.species.name
        habilidad2.innerHTML=data.abilities[0].ability.name
        mov2.innerHTML=data.moves[0].move.name
        console.log(data);
    })
}