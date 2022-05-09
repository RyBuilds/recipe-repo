import { useRecipes } from "../data/RecipeContext";
import Ingredients from "./fullrecipe/Ingredients";
import Instructions from "./fullrecipe/Instructions";
import Nutrition from "./fullrecipe/Nutrition";
import Utensils from "./fullrecipe/Utensils";

import classes from "../css/FullRecipe.module.css";

function FullRecipe() {
  const recipes = useRecipes().recipes;

  const currentSlug = window.location.href;
  const recipeSlug = currentSlug.substring(currentSlug.lastIndexOf("/") + 1);
  const currentRecipeObject = recipes.filter((recipe) => {
    return recipe.slug === recipeSlug;
  });
  const currentRecipe = currentRecipeObject[0];
  /* prettier-ignore */
  const {heading, subheading, duration, image, utensils, ingredients, nutrition, 
  instructions } = {...currentRecipe};

  // instructions.map((step, key) => {
  //   console.log(step);
  //   console.log(key + 1);
  // });8

  return (
    <div>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={image} alt={heading} />
      </div>
      <h1 className={classes.h1}>{heading}</h1>
      <h2 className={classes.h2}>{subheading}</h2>
      <p className={classes.duration}>
        <span className={classes.time}>{duration}</span> minutes
      </p>

      <h3 className={classes.h3}>Ingredients</h3>
      <Ingredients ingredients={ingredients} />

      <h3 className={classes.h3}>Utensils</h3>

      <ul className={classes.utensilsContainer}>
        {utensils.map((item) => {
          return <Utensils key={item} utensils={item} />;
        })}
      </ul>

      <h3 className={classes.h3}>Nutritional Information</h3>
      <Nutrition nutrition={nutrition} />

      <h3 className={classes.h3}>Cooking Instructions</h3>
      <div className={classes.grid}>
        {instructions?.map((step, index) => {
          return (
            <Instructions
              key={index + 1}
              index={index + 1}
              heading={heading}
              instruction={step.instruction}
              image={step.image}
            />
          );
        })}
      </div>

      {/* <Instructions instructions={steps} /> */}

      {/* {Object.entries(ingredients).forEach(([key, value]) => {
        return <Ingredients key={key} value={value} />;
      })}
      
      <h1>Nutrition</h1>
      <Nutrition />
      
      <h1>Utensils</h1>
      {utensils.map((item) => {
        return <Utensils key={item} utensils={item} />;
      })}
      
      <h1>Instructions</h1>
      {steps.map((step) => {
        return (
          <Instructions
          key={step.step}
          heading={heading}
          image={step.image}
          step={step.step}
          instructions={step.instructions}
          />
          );
        })} */}
    </div>
  );
}

export default FullRecipe;
