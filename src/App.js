import { Route, Switch } from "react-router-dom";

import AllRecipesPage from "./pages/AllRecipes";
import QuickRecipesPage from "./pages/QuickRecipes";
import NewRecipePage from "./pages/NewRecipe";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route exact path="/">
          <AllRecipesPage />
        </Route>
        <Route path="/quick-recipes">
          <QuickRecipesPage />
        </Route>
        <Route path="/new-recipe">
          <NewRecipePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
