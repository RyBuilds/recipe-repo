import classes from "../css/FullRecipe.module.css";
import { useRecipes } from "../store/RecipeContext";

function FullRecipe() {
  const recipes = useRecipes().recipes;

  const slug = window.location.href;
  const recipeSlug = slug.substring(slug.lastIndexOf("/") + 1);
  const currentRecipeObject = recipes.filter((recipe) => {
    return recipe.slug === recipeSlug;
  });

  const id = currentRecipeObject[0].id;
  const image = currentRecipeObject[0].image;
  const heading = currentRecipeObject[0].heading;
  const subheading = currentRecipeObject[0].subheading;
  const duration = currentRecipeObject[0].duration;
  // const ingredients = currentRecipeObject[0].ingredients;

  return (
    <div>
      <h1>{heading}</h1>
      <h2>{subheading}</h2>
      <img src={image} />
    </div>
  );
}

export default FullRecipe;
