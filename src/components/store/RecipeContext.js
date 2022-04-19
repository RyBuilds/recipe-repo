import { useState, useEffect, createContext } from "react";

const RecipesContext = createContext();

export function RecipesContextProvider(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRecipes, setLoadedRecipes] = useState([]);
  const [loadedIngredients, setLoadedIngredients] = useState([]);

  useEffect(() => {
    fetch("https://recipe-ly-default-rtdb.firebaseio.com/recipes.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const recipes = [];
        for (const key in data) {
          const recipe = {
            id: key,
            ...data[key],
          };
          recipe.slug = recipe.heading
            .toLowerCase()
            .replaceAll(" ", "-")
            .replaceAll(",", "")
            .replaceAll("&", "and");
          recipes.push(recipe);
        }
        setLoadedRecipes(recipes);
      });
  }, []);

  useEffect(() => {
    fetch("https://recipe-ly-default-rtdb.firebaseio.com/ingredients.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const ingredients = [];
        for (const key in data) {
          const ingredient = {
            ...data[key],
          };
          ingredients.push(ingredient);
        }
        setLoadedIngredients(ingredients);
      });
  }, []);

  useEffect(() => {
    if (loadedRecipes.length && loadedIngredients.length) {
      setIsLoading(false);
    }
  });

  const context = {
    loading: isLoading,
    recipes: loadedRecipes,
    ingredients: loadedIngredients,
  };

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  !isLoading
    ? console.log(context)
    : console.log(`Unloaded Context: ${context}`);

  return (
    <RecipesContext.Provider value={context}>
      {props.children}
    </RecipesContext.Provider>
  );
}

export default RecipesContext;
