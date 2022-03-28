import Card from "../ui/Card";
import classes from "./RecipeItem.module.css";
import { FiClock } from "react-icons/fi";

function RecipeItem(props) {
  return (
    <li className={classes.item}>
      {/* <li className={classes.item}> */}
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
          <button>More Details</button>
        </div>
      </Card>
    </li>
  );
}

export default RecipeItem;
