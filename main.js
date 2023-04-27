import Pokemon from "./Pokemon.js";
import adatbeolvas from "./hivasok.js";

$(function(){
    let lista =[]
    let vegpont = "https://pokeapi.co/api/v2/pokemon/gardevoir"
    adatbeolvas(vegpont, lista, megjelenit);

});




function megjelenit(lista){
    console.log(lista);
    const gardevoirPokemon = {kep: lista.sprites.front_default, neve: lista.name};
    console.log(gardevoirPokemon);
    const kiiro =$("article")
    const poke1 = new Pokemon(gardevoirPokemon, kiiro);
   


}