import { useHistory } from "react-router-dom";

import NewRecipeForm from "../components/recipes/NewRecipeForm";

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

  return (
    <section className="form">
      {/* <h1>Add New Meetup</h1> */}
      <NewRecipeForm onNewRecipe={newRecipeHandler} />
    </section>
  );
}

export default NewRecipePage;
