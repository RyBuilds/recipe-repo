import { useState, useEffect, createContext } from "react";

const RecipesContext = createContext();

export function RecipesContextProvider(props) {
  let [isLoading, setIsLoading] = useState(true);
  let [loadedRecipes, setLoadedRecipes] = useState([]);
  let [loadedIngredients, setLoadedIngredients] = useState([]);

  useEffect(() => {
    fetch("https://recipe-ly-default-rtdb.firebaseio.com/recipes.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const recipes = [];
        for (const key in data) {
          let recipe = {
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

  !isLoading ? console.log(context) : console.log("");

  return (
    <RecipesContext.Provider value={context}>
      {props.children}
    </RecipesContext.Provider>
  );
}

export default RecipesContext;
