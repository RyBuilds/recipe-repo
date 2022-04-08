import { useRef } from "react";

import FormCard from "../ui/FormCard";
import classes from "../css/NewIngredientForm.module.css";

function NewIngredientForm(props) {
  const nameInputRef = useRef();
  const unitInputRef = useRef();
  const imageInputRef = useRef();
  const allergensInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUnit = unitInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAllergens = allergensInputRef.current.value;

    const recipeData = {
      name: enteredName,
      unit: enteredUnit,
      image: enteredImage,
      allergens: enteredAllergens,
    };

    props.onNewIngredient(recipeData);
  }
  return (
    <FormCard>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Ingredient Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="unit">Measurement Unit</label>
          <input type="text" required id="unit" ref={unitInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Ingredient Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="alergens">Allergens</label>
          <input type="text" id="allergens" ref={allergensInputRef} />
        </div>

        <div className={classes.actions}>
          <button type="submit">Add Ingredient</button>
        </div>
      </form>
    </FormCard>
  );
}

export default NewIngredientForm;
