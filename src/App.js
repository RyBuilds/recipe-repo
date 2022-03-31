import { Route, Switch } from "react-router-dom";

import AllRecipesPage from "./pages/AllRecipes";
import QuickRecipesPage from "./pages/QuickRecipes";
import NewRecipePage from "./pages/NewRecipe";
import Layout from "./components/layout/Layout";
import FullRecipe from "./components/recipes/FullRecipe";

function App() {
  return (
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
  );
}

export default App;
