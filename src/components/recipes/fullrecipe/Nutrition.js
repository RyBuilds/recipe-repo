function Nutrition(props) {
  console.log(props.nutrition);
  return (
    <div>
      <h3>Nutritional Information</h3>

      <button></button>

      <h4>Energy (Kj): {props.nutrition.energyKJ}</h4>
      <h4>Energy (kcal): {props.nutrition.energyKcal}</h4>
      <h4>Fat: {props.nutrition.fat}</h4>
      <h4>of which saturates: {props.nutrition.saturates}</h4>
      <h4>Carbohydrate: {props.nutrition.carbohydrates}</h4>
      <h4>of which sugars: {props.nutrition.sugar}</h4>
      <h4>Protein: {props.nutrition.protein}</h4>
      <h4>Salt: {props.nutrition.salt}</h4>
    </div>
  );
}

export default Nutrition;
