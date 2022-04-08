import { useHistory } from "react-router-dom";

import Card from "../ui/Card";
import classes from "./RecipeItem.module.css";
import { FiClock } from "react-icons/fi";
import FullRecipe from "./FullRecipe";

function RecipeItem(props) {
  console.log(props);

  const history = useHistory();
  // const recipeSlug = props.heading
  //   .toLowerCase()
  //   .replaceAll(" ", "-")
  //   .replaceAll(",", "")
  //   .replaceAll("&", "and");

  function viewRecipeHandler() {
    history.push(`/recipe/${props.slug}`);
    const heading = props.heading;
    return (
      <FullRecipe
        key={props.id}
        id={props.id}
        image={props.image}
        heading={heading}
        subheading={props.subheading}
        duration={props.duration}
      />
    );
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.heading} />
        </div>
        <div className={classes.content}>
          <h3>{props.heading}</h3>
          <h4>{props.subheading}</h4>
          <span className={classes.align}>
            <FiClock /> {props.duration} Minutes
          </span>
        </div>
        <div className={classes.actions}>
          <button onClick={viewRecipeHandler}>View Recipe</button>
        </div>
      </Card>
    </li>
  );
}

export default RecipeItem;
