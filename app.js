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

const renderPokemon = async (pokemon)=> {
    const data = await fetchpokemon(pokemon);
    if(data){
        pokemon_name.innerHTML = data.name;
        pokemon_number.innerHTML = data.id;
        pokemon_img.src= data['sprites']['versions']
        ['generation-v']['black-white']['animated']
        ['front_default'];
    } else{
        pokemon_name.innerHTML = 'Não encontrado';
        pokemon_number.innerHTML = ''
        pokemon_img.style.display = 'none'

    }

pokemon_form.addEventListener("submit" ,(event)=>{
    event.preventDefault();
    console.log("Enviando Formulario",pokemon_input.value);
    renderPokemon(pokemon_input.value.toLowerCase());
    InputDeviceInfo.value = "";
})

pokemon_prev.addEventListener("click", ()=>{
    if(searchPokemon > 1){
        searchPokemon -=1
        renderPokemon(searchPokemon)
    }})
pokemon_next.addEventListener("click", ()=>{
    searchpokemon +=1
    renderPokemon(searchPokemon)
})
renderPokemon(searchPokemon)
     








