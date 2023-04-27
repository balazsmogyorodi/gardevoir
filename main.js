$(function(){
    let lista =[]
    let vegpont = "https://pokeapi.co/api/v2/pokemon/gardevoir"
    adatbeolvas(vegpont, lista, megjelenit);

});



function adatbeolvas(vegpont, lista, callbackFv){
    fetch(vegpont, {
        method: "GET"
    })
        .then((response) => response.json())
        .then((data) => {
            lista = data;
            callbackFv(lista);
        })
        .catch((error) => console.log(error));

        

}

function megjelenit(lista){
    console.log(lista);
    const gardevoirPokemon = {kep: lista.sprites.front_default, neve: lista.name};

    console.log(gardevoirPokemon);
    const kiiro =$("article")
    let megjelenit = `<h1>${gardevoirPokemon.neve}</h1>
    <img src="${gardevoirPokemon.kep}" width="110px">`;
    kiiro.html(megjelenit)


}