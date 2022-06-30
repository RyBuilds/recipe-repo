import { useHistory } from "react-router-dom";
import NewIngredientForm from "./NewIngredientForm";
import NewRecipeForm from "./NewRecipeForm";

function NewRecipePage() {
  const history = useHistory();

  function newRecipeHandler(recipeData) {
    fetch(`https://recipe-ly-default-rtdb.firebaseio.com/recipes.json`, {
      method: "POST",
      body: JSON.stringify(recipeData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }

  function newIngredientHandler(ingredientData) {
    fetch(`https://recipe-ly-default-rtdb.firebaseio.com/ingredients.json`, {
      method: "POST",
      body: JSON.stringify(ingredientData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        history.replace("/");
      })
      .then(() => {
        history.replace("/new-recipe");
      });
  }

  return (
    <section className="form">
      {/* <h1>Add New Meetup</h1> */}
      <NewRecipeForm onNewRecipe={newRecipeHandler} />
      <NewIngredientForm onNewIngredient={newIngredientHandler} />
    </section>
  );
}

export default NewRecipePage;
