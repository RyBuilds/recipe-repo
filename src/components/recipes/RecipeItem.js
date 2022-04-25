import { useHistory } from "react-router-dom";

import Card from "../ui/Card";
import classes from "../css/RecipeItem.module.css";
import { FiClock } from "react-icons/fi";

function RecipeItem(props) {
  const history = useHistory();

  function viewRecipeHandler() {
    history.push(`/recipe/${props.slug}`);
    const heading = props.heading;
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
