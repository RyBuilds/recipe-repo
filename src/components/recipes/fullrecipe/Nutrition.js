import classes from "../../css/Nutrition.module.css";

function Nutrition(props) {
  const p100 = props.nutrition.multiplier;
  return (
    <div className={classes.grid}>
      <div>
        <h4 className={classes.subheading}>Per Serving</h4>
        <ul className={classes.container}>
          <div className={classes.block}>
            <span className={classes.title}>Energy (kJ):</span>
            <p className={classes.statistic}>{props.nutrition.energyKJ} kJ</p>
          </div>
          <div className={classes.block}>
            <span className={classes.title}>Energy (kcal):</span>
            <p className={classes.statistic}>
              {props.nutrition.energyKcal} kcal
            </p>
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
            <p className={classes.statistic}>
              {props.nutrition.carbohydrates} g
            </p>
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
      </div>

      <div>
        <h4 className={classes.subheading}>Per 100g</h4>
        <ul className={classes.container}>
          <div className={classes.block}>
            <span className={classes.title}>Energy (kJ):</span>
            <p className={classes.statistic}>
              {Math.round(props.nutrition.energyKJ * p100)} kJ
            </p>
          </div>
          <div className={classes.block}>
            <span className={classes.title}>Energy (kcal):</span>
            <p className={classes.statistic}>
              {Math.round(props.nutrition.energyKcal * p100)} kcal
            </p>
          </div>
          <div className={classes.block}>
            <span className={classes.title}>Fat:</span>
            <p className={classes.statistic}>
              {(props.nutrition.fat * p100).toFixed(2)} g
            </p>
          </div>
          <div className={classes.block}>
            <span className={classes.title}>of which saturates:</span>
            <p className={classes.statistic}>
              {(props.nutrition.saturates * p100).toFixed(2)} g
            </p>
          </div>
          <div className={classes.block}>
            <span className={classes.title}>Carbohydrate:</span>
            <p className={classes.statistic}>
              {(props.nutrition.carbohydrates * p100).toFixed(2)} g
            </p>
          </div>
          <div className={classes.block}>
            <span className={classes.title}>of which sugars:</span>
            <p className={classes.statistic}>
              {(props.nutrition.sugars * p100).toFixed(2)} g
            </p>
          </div>
          <div className={classes.block}>
            <span className={classes.title}>Protein:</span>
            <p className={classes.statistic}>
              {(props.nutrition.protein * p100).toFixed(2)} g
            </p>
          </div>
          <div className={classes.block}>
            <span className={classes.title}>Salt:</span>
            <p className={classes.statistic}>
              {(props.nutrition.salt * p100).toFixed(2)} g
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Nutrition;
