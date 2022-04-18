import { Route, Switch } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import AllRecipesPage from "./pages/AllRecipes";
import FullRecipe from "./components/recipes/FullRecipe";
import QuickRecipesPage from "./pages/QuickRecipes";
import NewRecipePage from "./pages/NewRecipe";
import Layout from "./components/layout/Layout";
import { RecipesContextProvider } from "./components/store/RecipeContext";
import RecipesContext from "./components/store/RecipeContext";

function App() {
  const recipesCntx = useContext(RecipesContext);
  let recipes = recipesCntx.recipes;
  console.log(recipes);

  return (
    <RecipesContextProvider>
      <Layout>
        <Switch>
          <Route exact path="/">
            <AllRecipesPage
            // recipes={loadedRecipes}
            />
          </Route>
          <Route path="/recipe/:recipeName">
            <FullRecipe
            // recipes={loadedRecipes}
            // ingredients={loadedIngredients}
            />
          </Route>
          <Route path="/quick-recipes">
            <QuickRecipesPage
            // recipes={loadedRecipes}
            // ingredients={loadedIngredients}
            />
          </Route>
          <Route path="/new-recipe">
            <NewRecipePage />
          </Route>
        </Switch>
      </Layout>
    </RecipesContextProvider>
  );
}

export default App;
