document.getElementById("addRecipe").addEventListener("click", addRecipe);
document.getElementById("search").addEventListener("input", searchRecipes);

let recipes = [];

function addRecipe() {
  const recipeName = document.getElementById("recipeName").value.trim();
  const ingredients = document.getElementById("ingredients").value.trim();

  if (recipeName && ingredients) {
    recipes.push({ name: recipeName, ingredients: ingredients.split(",") });
    displayRecipes(recipes);
    document.getElementById("recipeName").value = "";
    document.getElementById("ingredients").value = "";
  } else {
    alert("Please fill in both fields!");
  }
}

function deleteRecipe(index) {
  recipes.splice(index, 1);
  displayRecipes(recipes);
}

function displayRecipes(recipeList) {
  const recipeListContainer = document.getElementById("recipeList");
  recipeListContainer.innerHTML = "";

  recipeList.forEach((recipe, index) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.className = "recipe";
    recipeDiv.innerHTML = `
      <h3>${recipe.name}</h3>
      <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
      <button onclick="deleteRecipe(${index})">Delete</button>
    `;
    recipeListContainer.appendChild(recipeDiv);
  });
}

function searchRecipes() {
  const searchTerm = document.getElementById("search").value.toLowerCase();
  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
  );
  displayRecipes(filteredRecipes);
}
