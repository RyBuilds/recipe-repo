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
  }, []);

  // useEffect(() => {
  //   fetch("https://recipe-ly-default-rtdb.firebaseio.com/recipes.json")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const recipes = [];
  //       for (const key in data) {
  //         const recipe = {
  //           id: key,
  //           ...data[key],
  //         };
  //         recipe.slug = recipe.heading
  //           .toLowerCase()
  //           .replaceAll(" ", "-")
  //           .replaceAll(",", "")
  //           .replaceAll("&", "and");
  //         recipes.push(recipe);
  //       }
  //       setLoadedRecipes(recipes);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("https://recipe-ly-default-rtdb.firebaseio.com/ingredients.json")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const ingredients = [];
  //       for (const key in data) {
  //         const ingredient = {
  //           ...data[key],
  //         };
  //         ingredients.push(ingredient);
  //       }
  //       setLoadedIngredients(ingredients);
  //     });
  // }, []);

  const context = {
    recipes: loadedRecipes,
    ingredients: loadedIngredients,
  };

  console.log(context);

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
