class Pokemon {
    constructor(adat, szuloElem) {

        this.neve = adat.neve;
        this.kep = adat.kep;
        szuloElem.append(`
<div class="pokemon" style="position:absolute">
<h3>${this.neve}</h3>
<img src="${this.kep}" alt="${this.neve}" >
</div>`)
        this.pokeElem=$(".pokemn:last-child");
        console.log(this.pokeElem);
        $(window).on("keydown", (event) => {
            console.log(event.key)
            let poz = this.pokeElem.position();
            console.log(poz);

            switch (bill){
                case "a":
                console.log("bal");
                break;
                case "f":
                console.log("jobb");
                break;
                default:
            }
        });
    }


}

export default Pokemon;