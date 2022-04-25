import { Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllRecipesPage from "./pages/AllRecipes";
import FullRecipe from "./components/recipes/FullRecipe";
import QuickRecipesPage from "./pages/QuickRecipes";
import NewRecipePage from "./pages/NewRecipe";
import { RecipesContextProvider } from "./components/store/RecipeContext";

function App() {
  return (
    <RecipesContextProvider>
      <Layout>
        <Switch>
          <Route exact path="/">
            <AllRecipesPage />
          </Route>
          <Route path="/recipe/:recipeName">
            <FullRecipe />
          </Route>
          <Route path="/quick-recipes">
            <QuickRecipesPage />
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
