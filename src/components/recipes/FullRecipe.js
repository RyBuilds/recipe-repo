import classes from "../css/FullRecipe.module.css";

function FullRecipe(props) {
  const slug = window.location.href;
  const recipeSlug = slug.substring(slug.lastIndexOf("/") + 1);
  console.log(recipeSlug);

  return (
    <div>
      <h1>Your Recipe</h1>
    </div>
  );
}

export default FullRecipe;
