import classes from "../../css/Utensils.module.css";

function Utensils(props) {
  console.log(props);
  return (
    <li className={classes.item}>
      <p>{props.utensils}</p>
    </li>
  );
}

export default Utensils;
