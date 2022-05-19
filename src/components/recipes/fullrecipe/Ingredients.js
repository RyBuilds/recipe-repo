import { useRecipes } from "../../data/RecipeContext";
import classes from "../../css/Ingredients.module.css";

function Ingredients(props) {
  const ingredients = useRecipes().ingredients;

  let ingredientObject = {
    name: props.ingredient,
    quantity: props.quantity,
  };

  ingredients.forEach((element) => {
    if (element.name === props.ingredient) {
      ingredientObject.unit = element.unit;
      ingredientObject.image = element.image;
      ingredientObject.allergens = element.allergens;
      // console.log(`${element.name} exists!`);
    }
  });

  return (
    <div className={classes.container}>
      <img
        src={ingredientObject.image}
        alt={ingredientObject}
        className={classes.image}
      />
      <p className={classes.name}>{ingredientObject.name}</p>
      <p className={classes.quantity}>
        <span>{`${ingredientObject.quantity} `}</span>
        {ingredientObject.unit}
      </p>
      <p></p>
    </div>
  );
}

export default Ingredients;
