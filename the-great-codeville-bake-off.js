const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // Code here!
  // variable to store recipe name
  let recipeName = '';
  //loop thru each recipe in recipes array object
  recipes.forEach((recipe) => {
    //check each bakery for recipe ingredient, if found one item each then return recipe name
    if (
      ingredientCheck(bakeryA, recipe['ingredients']) &&
      ingredientCheck(bakeryB, recipe['ingredients'])
    ) {
      recipeName = recipe['name'];
    }
  });
  //return recipe name
  return recipeName;
};

const ingredientCheck = function (bakery, recipeIndredients) {
  //boolean variable to store contain ingredient flag value, default value is false
  let containIngredient = false;

  //loop thru each ingredient in recipe
  recipeIndredients.forEach((recipeIngredient) => {
    //loop thru each ingredient in bakery
    bakery.forEach((bakeryIngredient) => {
      //if found then change containIngredient flag value to true
      if (bakeryIngredient === recipeIngredient) {
        containIngredient = true;
      }
    });
  });
  //return containIngredient flag value
  return containIngredient;
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base'],
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese'],
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef'],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate'],
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey'],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins'],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
