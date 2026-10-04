`use strict`;
let search = document.querySelector("#search");
let selectList = document.querySelector("#selectList");
let posts = document.querySelector(".posts");

async function getRecipes() {
  let res = await fetch("https://dummyjson.com/recipes");
  let json = await res.json();
  let recipes = json.recipes;
  console.log(recipes);
  displayContent(recipes);
  displayOptions(recipes);
}
getRecipes();

function displayContent(recipes) {
  let container = ``;
  for (let recipe of recipes) {
    let { name, image } = recipe;
    container += `<div class="card">
            <img class="card-img-top" src='${image}'  alt="${name}" />
            <h4 class="card-title">${name}</h4>
      </div>`;
  }
  posts.innerHTML = container;
}

function displayOptions(recipes) {
  let options = ``;
  for (let option of recipes) {
    let { name } = option;
    options += `<option value="${name}">${name}</option>`;
  }
  selectList.innerHTML = options;
}
