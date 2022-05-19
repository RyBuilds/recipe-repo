import classes from "../../css/Utensils.module.css";

function Utensils(props) {
  return (
    <li className={classes.item}>
      <p>{props.utensils}</p>
    </li>
  );
}

export default Utensils;
