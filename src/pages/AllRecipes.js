import RecipeItem from "../components/recipes/RecipeItem";
import { useRecipes } from "../components/data/RecipeContext";

function AllRecipesPage() {
  const recipes = useRecipes().recipes;

  return (
    <ul className="grid">
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          id={recipe.id}
          slug={recipe.slug}
          image={recipe.image}
          heading={recipe.heading}
          subheading={recipe.subheading}
          duration={recipe.duration}
        />
      ))}
    </ul>
  );
}

export default AllRecipesPage;
