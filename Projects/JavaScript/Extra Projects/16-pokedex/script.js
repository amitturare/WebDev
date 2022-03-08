// Helper Functions
const getElements = (selection) => {
    const element = document.querySelector(selection);

    if (element) {
        return element;
    } else {
        throw new Error(`Please check the selected element ${selection}`);
    }
};

// ==== Selections ==== //
const container = getElements("#container");

const totalPokemons = 150;
const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
};
const mainTypes = Object.keys(colors);

// ==== API ==== //

async function fetchPokemons() {
    for (let i = 1; i < totalPokemons; i++) {
        await getDetails(i);
    }
}

async function getDetails(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const response = await fetch(url);
    const pokemon = await response.json();

    // Update Dom
    createPokemonCard(pokemon);
}

// ==== Create Pokemon Cards ==== //
function createPokemonCard(data) {
    const pokemonEl = document.createElement("div");

    // Add classes
    pokemonEl.classList.add("pokemon");
    // Create the card insides
    const id = data.id;
    const name = data.name[0].toUpperCase() + data.name.slice(1);
    const pokeTypes = data.types.map((el) => el.type.name);
    const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);
    const color = colors[type]

    pokemonEl.innerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="pokemon"/>
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>
    `;
    // Apply the color to the card
    pokemonEl.style.backgroundColor = color;
    // Append to the container div
    container.appendChild(pokemonEl);
}

// Onload
fetchPokemons();
