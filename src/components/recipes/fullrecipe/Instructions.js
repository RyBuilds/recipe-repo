import classes from "../../css/Instructions.module.css";

function Instructions(props) {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <img
          className={classes.image}
          src={props.image}
          alt={`${props.heading} step ${props.index}`}
        />
        <div className={classes.instructionContainer}>
          <h3 className={classes.step}>{`Step ${props.index}`}</h3>
          <p className={classes.instruction}>{props.instruction}</p>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
