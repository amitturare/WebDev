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
const search = getElements("#search");
const typeSelection = getElements(".type-selection");

const totalPokemons = 150;
const pokemonArr = [];
const colors = {
    all: "#fff",
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
async function getDetails() {
    for (let i = 1; i < totalPokemons; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

        const response = await fetch(url);
        const data = await response.json();

        pokemonArr.push(data);
    }

    // Update DOM
    displayPokemonCard(pokemonArr);
    // Update types
    getTypes();
}

// ==== Display Pokemon Cards ==== //
function displayPokemonCard(arr) {
    const pokemonCards = arr
        .map((item) => {
            const id = item.id;
            const name = item.name[0].toUpperCase() + item.name.slice(1);
            const pokeTypes = item.types.map((el) => el.type.name);
            const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);
            const color = colors[type];

            return `
                <div class="pokemon" style="background:${color}">
                    <div class="img-container">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="pokemon"/>
                    </div>
                    <div class="info">
                        <span class="number">#${id}</span>
                        <h3 class="name">${name}</h3>
                        <small class="type">Type: <span>${type.charAt(0).toUpperCase() + type.slice(1)}</span></small>
                    </div>
                </div>
        `;
        })
        .join("");

    container.innerHTML = pokemonCards;
}

// ==== Display Types ==== //
function getTypes() {
    const htmlStrings = mainTypes
        .map((item) => {
            return `<option value="${item}">${
                item.charAt(0).toUpperCase() + item.slice(1)
            }</option>`;
        })
        .join("");

    typeSelection.innerHTML = htmlStrings;
}

// ==== Sort ==== //
typeSelection.addEventListener("change", function () {
    const selectedType = typeSelection.value;

    const filteredArr = pokemonArr.filter((pokemon) => {
        const pokeTypes = pokemon.types.map((el) => el.type.name);
        const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);

        return selectedType == type;
    });
    if (selectedType == 'all') {
        displayPokemonCard(pokemonArr);
    } else {
        displayPokemonCard(filteredArr);
    }
});

// ==== Live Search ==== //
search.addEventListener("keyup", (e) => {
    e.preventDefault();

    const target = e.target.value.toLowerCase();

    const filteredArr = pokemonArr.filter((pokemon) => {
        return pokemon.name.includes(target);
    });
    displayPokemonCard(filteredArr);
});

// Onload
getDetails();
