import React, { useState, useEffect, createContext } from "react";
import { db } from "../store/Base";
import { collection, getDocs } from "firebase/firestore";

const RecipesContext = createContext();

export function RecipesContextProvider(props) {
  const [loadedRecipes, setLoadedRecipes] = useState([]);
  const [loadedIngredients, setLoadedIngredients] = useState([]);

  // ACCESS FIRESTORE COLLECTIONS
  const recipesCollection = collection(db, "recipes");
  const ingredientsCollection = collection(db, "ingredients");

  useEffect(() => {
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
  }, [recipesCollection, ingredientsCollection]);

  const context = {
    recipes: loadedRecipes,
    ingredients: loadedIngredients,
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
