const url = "https://pokeapi.co/api/v2/pokemon/";
const card_outline = document.querySelector(".card_outline");
const generateBtn = document.querySelector(".generate");
const search = document.querySelector(".search");
const searchPokemon = document.querySelector(".search_pokemon");
const Color = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
};

let generateCard = (data) => {
  // console.log(data);
  const id = data.id;
  // console.log(id);
  const hp = data.stats[0].base_stat;
  const image = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`;
  const name = data.name.toUpperCase();
  const attack = data.stats[1].base_stat;
  const defense = data.stats[2].base_stat;
  const speed = data.stats[5].base_stat;
  const themeColor = Color[data.types[0].type.name];
  //   console.log(name,attack,speed,defense);

  card_outline.innerHTML = `<div class="card mx-auto" style="max-width: 20rem">
  <img
    src=${image}
    class="card-img-top img-fluid"
    alt="..."
  />
  <div class="card-body">
    <div class="text-center pb-4">
      <h2 class="card-title">${name}</h2>
      <span class="d-inline">HP: ${hp}</span>
    </div>
    <p class="card-text d-flex text-white justify-content-evenly">
      
    </p>
    <div class="powers d-flex justify-content-evenly flex-wrap">
      <div>
        <h5>${attack}</h5>
        <p>Attack</p>
      </div>
      <div>
        <h5>${defense}</h5>
        <p>Defense</p>
      </div>
      <div>
        <h5>${speed}</h5>
        <p>Speed</p>
      </div>
    </div>
  </div>
</div>`;

  pokemonType(data.types);
  styleCard(themeColor);
};

let pokemonType = (types) => {
  types.forEach((item) => {
    let span = document.createElement("span");
    span.textContent = item.type.name;
    document.querySelector(".card-text").appendChild(span);
  });
};

let styleCard = (color) => {
  card_outline.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
 
  document.querySelector('.card').style.border = color;
  card_outline.querySelectorAll(".card-text span").forEach((Color) => {
    Color.style.backgroundColor = color;
  });
};

function generateNewUrl(a){
 let newUrl ;
    if(a===0){
      let num = Math.floor(Math.random() * 150) + 1;
     newUrl= url + num;}
     else{
        newUrl=url+searchPokemon.value.toLowerCase();
     }
  //FETCHING NEW DATA FROM THE API
  fetch(newUrl)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      generateCard(data);
    });
}


// let getData = (a) => {
  
// generateNewUrl(a);
  
// };
function windowR(){
  generateNewUrl(0);
}

generateBtn.addEventListener("click", ()=>windowR());
window.addEventListener("load",()=>windowR());
search.addEventListener("click", function () {
  // console.log(searchPokemon.value);
  generateNewUrl(1)
});
