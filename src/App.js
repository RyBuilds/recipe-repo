import { Route, Switch } from "react-router-dom";

import { RecipesContextProvider } from "./components/data/RecipeContext";
import Layout from "./components/layout/Layout";
import AllRecipesPage from "./pages/AllRecipesPage";
import FullRecipePage from "./pages/FullRecipePage";
import QuickRecipesPage from "./pages/QuickRecipesPage";
import FavouritesPage from "./pages/FavouritesPage";

function App() {
  return (
    <RecipesContextProvider>
      <Layout>
        <Switch>
          <Route exact path="/">
            <AllRecipesPage />
          </Route>
          <Route path="/recipe/:recipeName">
            <FullRecipePage />
          </Route>
          <Route path="/quick-recipes">
            <QuickRecipesPage />
          </Route>
          <Route path="/favourites">
            <FavouritesPage />
          </Route>
        </Switch>
      </Layout>
    </RecipesContextProvider>
  );
}

export default App;
