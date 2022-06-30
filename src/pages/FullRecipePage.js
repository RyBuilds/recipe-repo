import { useRecipes } from "../components/data/RecipeContext";
import Ingredients from "../components/recipes/fullrecipe/Ingredients";
import Instructions from "../components/recipes/fullrecipe/Instructions";
import Nutrition from "../components/recipes/fullrecipe/Nutrition";
import Utensils from "../components/recipes/fullrecipe/Utensils";
import classes from "../components/css/FullRecipePage.module.css";

function FullRecipePage() {
  const recipes = useRecipes().recipes;

  const currentSlug = window.location.href;
  const recipeSlug = currentSlug.substring(currentSlug.lastIndexOf("/") + 1);
  const currentRecipeObject = recipes.filter((recipe) => {
    return recipe.slug === recipeSlug;
  });
  const currentRecipe = currentRecipeObject[0];
  /* prettier-ignore */
  const {id, heading, subheading, duration, image, utensils, ingredients, nutrition, 
  instructions } = {...currentRecipe};

  if (!ingredients || !utensils || !nutrition) return null;

  return (
    <div className={classes.container}>
      {/* HEADER SECTION */}
      <div className={classes.headerSection}>
        <div className={classes.textContainer}>
          <h1 className={classes.heading}>{heading}</h1>
          <h2 className={classes.secondaryheading}>{subheading}</h2>
          <p className={classes.durationLabel}>
            <span className={classes.durationNumber}>{duration}</span> minutes
          </p>
        </div>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={image} alt={heading} />
        </div>
      </div>
      {/* INFORMATION SECTION */}
      <div className={classes.informationSection}>
        <div>
          {/* INGREDIENTS */}
          <h3 className={classes.subheading}>Ingredients</h3>
          <ul className={classes.ingredientGrid}>
            {Object.entries(ingredients).map(([key, value]) => {
              return (
                <Ingredients
                  key={key}
                  id={id}
                  ingredient={key}
                  quantity={value}
                />
              );
            })}
          </ul>
          {/* UTENSILS */}
          <h3 className={classes.subheading}>Utensils</h3>
          <ul className={classes.utensilsContainer}>
            {utensils.map((item) => {
              return <Utensils key={item} utensils={item} />;
            })}
          </ul>
        </div>
        {/* NUTRITION */}
        <div>
          <h3 className={classes.subheading}>Nutritional Information</h3>
          <div className={classes.nutritionContainer}>
            <Nutrition nutrition={nutrition} />
          </div>
        </div>
      </div>
      {/* INSTRUCTIONS SECTION */}
      <div className={classes.instructionsSection}>
        <div className={classes.instructions}></div>
        <h3 className={classes.subheading}>Instructions</h3>
        <div className={classes.instructionsGrid}>
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
      </div>
    </div>
  );
}

export default FullRecipePage;
