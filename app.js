const pokemon_number = document.getElementById("pknum");
const pokemon_name = document.getElementById("pkname");
const pokemon_img = document.getElementById("pking");

const pokemon_form = document.getElementById("form");
const pokemon_input = document.getElementById("input");

const pokemon_prev = document.getElementById("bnt-prev");
const pokemon_img = document.getElementById("bnt-next");

let searchPokemon = 1;


const fetchpokemon = async (pokemon) => {
    const APIResponde = await fetch
    (`https://pokeapi.co/api/V2/pokemon/${pokemob}` );
    if)(APIResponde.status ===200){
        cont data = await APIResponde.json();
        return data;
}




