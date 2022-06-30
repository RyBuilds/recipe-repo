import { Link } from "react-router-dom";

import Card from "../ui/Card";
import classes from "../css/RecipeItem.module.css";
import { FiClock } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

function RecipeItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.favourite}>
          <FaHeart />
        </div>
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
                <button>
                  <Link className={classes.button} to={`/recipe/${props.slug}`}>
                    View Recipe
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default RecipeItem;
