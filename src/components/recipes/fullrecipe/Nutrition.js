import classes from "../../css/Nutrition.module.css";

function Nutrition(props) {
  console.log(props.nutrition);
  return (
    // <div className={classes.container}>
    //   <p>Energy (Kj): {props.nutrition.energyKJ}</p>
    //   <p>Energy (kcal): {props.nutrition.energyKcal}</p>
    //   <p>Fat: {props.nutrition.fat}</p>
    //   <p>of which saturates: {props.nutrition.saturates}</p>
    //   <p>Carbohydrate: {props.nutrition.carbohydrates}</p>
    //   <p>of which sugars: {props.nutrition.sugar}</p>
    //   <p>Protein: {props.nutrition.protein}</p>
    //   <p>Salt: {props.nutrition.salt}</p>
    // </div>

    <ul className={classes.container}>
      <div className={classes.block}>
        <span className={classes.title}>Energy (kJ):</span>
        <p className={classes.statistic}>{props.nutrition.energyKJ} kJ</p>
      </div>
      <div className={classes.block}>
        <span className={classes.title}>Energy (kcal):</span>
        <p className={classes.statistic}>{props.nutrition.energyKcal} kcal</p>
      </div>
      <div className={classes.block}>
        <span className={classes.title}>Fat:</span>
        <p className={classes.statistic}>{props.nutrition.fat} g</p>
      </div>
      <div className={classes.block}>
        <span className={classes.title}>of which saturates:</span>
        <p className={classes.statistic}>{props.nutrition.saturates} g</p>
      </div>
      <div className={classes.block}>
        <span className={classes.title}>Carbohydrate:</span>
        <p className={classes.statistic}>{props.nutrition.carbohydrates} g</p>
      </div>
      <div className={classes.block}>
        <span className={classes.title}>of which sugars:</span>
        <p className={classes.statistic}>{props.nutrition.sugars} g</p>
      </div>
      <div className={classes.block}>
        <span className={classes.title}>Protein:</span>
        <p className={classes.statistic}>{props.nutrition.protein} g</p>
      </div>
      <div className={classes.block}>
        <span className={classes.title}>Salt:</span>
        <p className={classes.statistic}>{props.nutrition.salt} g</p>
      </div>
    </ul>
  );
}

export default Nutrition;
