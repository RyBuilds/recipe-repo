import { useRecipes } from "../store/RecipeContext";

function FullRecipe() {
  const recipes = useRecipes().recipes;

  const currentSlug = window.location.href;
  const recipeSlug = currentSlug.substring(currentSlug.lastIndexOf("/") + 1);
  const currentRecipeObject = recipes.filter((recipe) => {
    return recipe.slug === recipeSlug;
  });
  const currentRecipe = currentRecipeObject[0];
  const { heading, subheading, image, ingredients, utensils, nutrition } = {
    ...currentRecipe,
  };
  console.log(ingredients, utensils, nutrition);

  return (
    <div>
      <h1>{heading}</h1>
      <h2>{subheading}</h2>
      <img src={image} alt={heading} />
    </div>
  );
}

export default FullRecipe;
