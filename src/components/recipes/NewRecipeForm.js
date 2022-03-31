import { useRef } from "react";

import FormCard from "../ui/FormCard";
import classes from "./NewRecipeForm.module.css";

function NewRecipeForm(props) {
  const headingInputRef = useRef();
  const subheadingInputRef = useRef();
  const imageInputRef = useRef();
  const durationInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredHeading = headingInputRef.current.value;
    const enteredSubheading = subheadingInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDuration = durationInputRef.current.value;

    const recipeData = {
      heading: enteredHeading,
      subheading: enteredSubheading,
      image: enteredImage,
      duration: enteredDuration,
    };

    props.onNewRecipe(recipeData);
  }

  return (
    <FormCard>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="heading">Recipe Heading</label>
          <input type="text" required id="heading" ref={headingInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="subheading">Recipe Subheading</label>
          <input
            type="text"
            required
            id="subheading"
            ref={subheadingInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Recipe Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="duration">Recipe Duration</label>
          <input type="number" required id="duration" ref={durationInputRef} />
        </div>
        {/* 
        <h3>Ingredients</h3>

        <div className={classes.formSecondary}>
          <div className={classes.controlHelper}>
            <label htmlFor="name">Ingredient</label>
            <input type="text" required id="name" name="ingredient.name" />
          </div>
          <div className={classes.control}>
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              required
              id="quantity"
              name="ingredient.quantity"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="units">Unit(s)</label>
            <input type="text" id="units" name="ingredient.units" />
          </div>
          <div className={classes.control}>
            <label htmlFor="allergens">Allergens</label>
            <input type="text" id="allergens" name="ingredient.allergens" />
          </div>
          <div className={classes.control}>
            <label htmlFor="ingredientImage">Image</label>
            <input
              type="url"
              required
              id="ingredientImage"
              name="ingredient.image"
            />
          </div>
        </div> */}

        <div className={classes.actions}>
          <button type="submit">Add Recipe</button>
        </div>
      </form>
    </FormCard>
  );
}

export default NewRecipeForm;

// {
//   id: ``,
//   heading: ``,
//   subheading: ``,
//   image: ``,
//   duration: ``,
//   cuisine: ``,
//   ingredients: [
//     {
//       ingredient: ``,
//       quantity: [],
//       image: ``,
//       allergens: ``,
//     },
//   ],
//   nutrition: {
//     energyKJ: [],
//     energyKcal: [],
//     fat: [],
//     saturates: [],
//     carbohydrates: [],
//     sugars: [],
//     protein: [],
//     salt: [],
//   },
//   instructions: [
//     {
//       step: ``,
//       stepImage: ``,
//       tasks: ``,
//     },
//   ],
// },
