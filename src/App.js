import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import AllRecipesPage from "./pages/AllRecipes";
import QuickRecipesPage from "./pages/QuickRecipes";
import NewRecipePage from "./pages/NewRecipe";
import Layout from "./components/layout/Layout";
import FullRecipe from "./components/recipes/FullRecipe";

function App() {
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
          recipes.push(recipe);
        }
        setIsLoading(false);
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
        setIsLoading(false);
        setLoadedIngredients(ingredients);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <AllRecipesPage recipes={loadedRecipes} />
        </Route>
        <Route path="/recipe/:recipeName">
          <FullRecipe recipes={loadedRecipes} ingredients={loadedIngredients} />
        </Route>
        <Route path="/quick-recipes">
          <QuickRecipesPage />
        </Route>
        <Route path="/new-recipe">
          <NewRecipePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
