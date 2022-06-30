import React, { useState, useEffect, createContext } from "react";
import { db } from "./Base";
import { collection, getDocs } from "firebase/firestore";

const RecipesContext = createContext({
  recipes: [],
  ingredients: [],
  totalFavourites: 0,
  addFavourite: (favouriteRecipe) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {},
});

export function RecipesContextProvider(props) {
  const [loadedRecipes, setLoadedRecipes] = useState([]);
  const [loadedIngredients, setLoadedIngredients] = useState([]);
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);

  useEffect(() => {
    const recipesCollection = collection(db, "recipes");
    const ingredientsCollection = collection(db, "ingredients");

    const getRecipes = async () => {
      const recipes = await getDocs(recipesCollection);
      setLoadedRecipes(
        recipes.docs.map((recipe) => ({
          id: recipe.id,
          ...recipe.data(),
          slug: recipe
            .data()
            .heading.toLowerCase()
            .replaceAll(" ", "-")
            .replaceAll(",", "")
            .replaceAll("&", "and"),
        }))
      );
    };
    const getIngredients = async () => {
      const ingredients = await getDocs(ingredientsCollection);
      setLoadedIngredients(
        ingredients.docs.map((ingredient) => ({
          id: ingredient.id,
          ...ingredient.data(),
        }))
      );
    };

    getRecipes();
    getIngredients();
  }, []);

  function addFavouriteHandler(favouriteRecipe) {
    setFavouriteRecipes((previousFavouriteRecipes) => {
      return previousFavouriteRecipes.concat(favouriteRecipe);
    });
  }

  function removeFavouriteHandler(recipeId) {
    setFavouriteRecipes((previousFavouriteRecipes) => {
      return previousFavouriteRecipes.filter(
        (recipe) => recipe.id !== recipeId
      );
    });
  }

  function itemIsFavouriteHandler(meetupId) {
    return favouriteRecipes.some((meetup) => meetup.id === meetupId);
  }

  // CONTEXT
  const context = {
    recipes: loadedRecipes,
    ingredients: loadedIngredients,
    favourites: favouriteRecipes,
    totalFavourites: favouriteRecipes.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };

  return (
    <RecipesContext.Provider value={context}>
      {props.children}
    </RecipesContext.Provider>
  );
}

export const useRecipes = () => {
  const value = React.useContext(RecipesContext);

  if (!value) {
    throw new Error("RecipeContext Must be consumer within the UserProvider");
  }

  return value;
};
