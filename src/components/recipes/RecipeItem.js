import { useHistory } from "react-router-dom";

import Card from "../ui/Card";
import classes from "../css/RecipeItem.module.css";
import { FiClock } from "react-icons/fi";

function RecipeItem(props) {
  const history = useHistory();

  function viewRecipeHandler() {
    history.push(`/recipe/${props.slug}`);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.heading} />
        </div>
        <div>
          <div className={classes.content}>
            <div>
              <h3 className={classes.heading}>{props.heading}</h3>
              <p className={classes.subheading}>{props.subheading}</p>
            </div>
            <div>
              <span className={classes.durationAlign}>
                <FiClock /> {props.duration} Minutes
              </span>
              <div className={classes.actions}>
                <button onClick={viewRecipeHandler}>View Recipe</button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default RecipeItem;
