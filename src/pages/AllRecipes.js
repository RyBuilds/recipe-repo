import RecipeItem from "../components/recipes/RecipeItem";
import { useRecipes } from "../components/store/RecipeContext";

function AllRecipesPage(props) {
  const recipes = useRecipes().recipes;
  // console.log(recipes);

  return (
    <ul className="grid">
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          id={recipe.id}
          slug={recipe.slug}
          image={recipe.image}
          heading={recipe.heading}
          subheading={recipe.subheading}
          duration={recipe.duration}
        />
      ))}
    </ul>
  );
}

export default AllRecipesPage;

// {
//   id: ``,
//   heading: ``,
//   subheading: ``,
//   image: ``,
//   duration: ``,
//   ingredients: [
//     {
//       ingredient: ``,
//       quantity: [],
//       image: ``,
//       allergens: ``,
//     },
//   ],
//   nutrition: {
//     energyKJ: [],
//     energyKcal: [],
//     fat: [],
//     saturates: [],
//     carbohydrates: [],
//     sugars: [],
//     protein: [],
//     salt: [],
//   },
//   instructions: [
//     {
//       step: ``,
//       stepImage: ``,
//       tasks: ``,
//     },
//   ],
// },

// const dummyData = [
//   {
//     id: `1`,
//     heading: `Creamy Truffle and Mushroom Rigatoni`,
//     subheading: `with Tenderstem® Broccoli and Walnuts`,
//     image: `https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_auto,w_1900/hellofresh_s3/image/creamy-truffle-and-mushroom-rigatoni-752779d8.jpg`,
//     duration: `20`,
//     cuisine: [`Italian`, "Vegetarian"],
//     ingredients: [
//       {
//         ingredient: `Wheat Rigatoni Pasta`,
//         quantity: [180, 270, 360],
//         metric: `grams`,
//         image: `https://img.hellofresh.com/f_auto,fl_lossy,h_140,q_auto,w_140/hellofresh_s3/image/55686416f8b25e68408b456c.png`,
//         allergens: [`Cereals containing Gluten`],
//       },
//       {
//         ingredient: `Garlic Clove`,
//         quantity: [1, 2, 3],
//         metric: `unit(s)`,
//         image: `https://img.hellofresh.com/f_auto,fl_lossy,h_140,q_auto,w_140/hellofresh_s3/image/55686a1b4dab71e81d8b456b.png`,
//         allergens: [``],
//       },
//       {
//         ingredient: `Tenderstem® Broccoli`,
//         quantity: [150, 200, 300],
//         metric: `grams`,
//         image: `https://img.hellofresh.com/f_auto,fl_lossy,h_140,q_auto,w_140/hellofresh_s3/ingredients/554a665afd2cb99c598b4569-b3837ad0.png`,
//         allergens: [``],
//       },
//       {
//         ingredient: `Sliced Mushrooms`,
//         quantity: [120, 180, 240],
//         metric: `grams`,
//         image: `https://img.hellofresh.com/f_auto,fl_lossy,h_140,q_auto,w_140/hellofresh_s3/ingredient/5d3adede892c36000e5a4ed6-62f5390a.png`,
//         allergens: [``],
//       },
//       {
//         ingredient: `Creme Fraiche`,
//         quantity: [150, 225, 300],
//         metric: `grams`,
//         image: `https://img.hellofresh.com/f_auto,fl_lossy,h_140,q_auto,w_140/hellofresh_s3/image/555084f34dab718e128b4569.png`,
//         allergens: [`Milk`],
//       },
//       {
//         ingredient: `Vegetable Stock Paste`,
//         quantity: [10, 15, 20],
//         metric: `grams`,
//         image: `https://img.hellofresh.com/f_auto,fl_lossy,h_140,q_auto,w_140/hellofresh_s3/ingredient/60002dce8c8c0a188200a96e-2ab5d0c2.png`,
//         allergens: [`Celery`],
//       },
//       {
//         ingredient: `Truffle Zest`,
//         quantity: [1, 1.5, 2],
//         metric: `sachet(s)`,
//         image: `https://img.hellofresh.com/f_auto,fl_lossy,h_140,q_auto,w_140/hellofresh_s3/ingredient/5c3f3ec1c445fa424f2a62f3-c31940c3.png`,
//         allergens: [``],
//       },
//       {
//         ingredient: `Grated Hard Italian Style Cheese`,
//         quantity: [40, 65, 90],
//         metric: `grams`,
//         image: `https://img.hellofresh.com/f_auto,fl_lossy,h_140,q_auto,w_140/hellofresh_s3/ingredients/5550865efd2cb974658b4568-aa402ec9.png`,
//         allergens: [`Milk`, "Eggs"],
//       },
//       {
//         ingredient: `Walnuts`,
//         quantity: [20, 40, 60],
//         metric: `grams`,
//         image: `https://img.hellofresh.com/f_auto,fl_lossy,h_140,q_auto,w_140/hellofresh_s3/image/556c0e74fd2cb966448b4567.png`,
//         allergens: [`Nuts`],
//       },
//       {
//         ingredient: `Water for the Sauce`,
//         quantity: [50, 75, 100],
//         metric: `milliliters`,
//         image: `https://img.hellofresh.com/f_auto,fl_lossy,h_140,q_auto,w_140/hellofresh_s3/ingredient/5fbeb104688281450b8bd061-2fea204a.png`,
//         allergens: [``],
//       },
//     ],
//     nutrition: {
//       energyKJ: [3115, 919],
//       energyKcal: [745, 220],
//       fat: [38, 11.21],
//       saturates: [20, 5.9],
//       carbohydrates: [73, 21.53],
//       sugars: [8, 2.36],
//       protein: [26, 7.67],
//       salt: [1.57, 0.46],
//     },
//     instructions: [
//       {
//         step: `1`,
//         stepImage: `https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_680/hellofresh_s3/621cab3090bcc84771527fe4/step-abc36a18.jpg`,
//         tasks: `a) Bring a large saucepan of water to the boil with 1/2 tsp of salt.
//         b) Once boiling, add the rigatoni pasta and bring back to the boil. Cook until tender, 12 mins.`,
//       },
//       {
//         step: `2`,
//         stepImage: `https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_680/hellofresh_s3/621cab3090bcc84771527fe4/step-217a1aba.jpg`,
//         tasks: `a) While the pasta is cooking, peel and grate the garlic (or use a garlic press).
//         b) Chop the Tenderstem® into 3 pieces widthways.
//         c) When the pasta has been cooking for 8 mins, add the Tenderstem® to the pasta and water and bring back to the boil.
//         d) Cook with the pasta for the last 4 mins of cooking time.`,
//       },
//       {
//         step: `3`,
//         stepImage: `https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_680/hellofresh_s3/621cab3090bcc84771527fe4/step-e8dd3bc2.jpg`,
//         tasks: `a) When the pasta and broccoli are cooked, drain them in a colander.
//         b) Drizzle with oil to stop them sticking together and leave the colander in the sink.`,
//       },
//       {
//         step: `4`,
//         stepImage: `https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_680/hellofresh_s3/621cab3090bcc84771527fe4/step-dc6f5466.jpg`,
//         tasks: `a) Pop your pan back on medium-high heat with a drizzle of oil.
//         b) Add the sliced mushrooms and season with salt and pepper.
//         c) Stir-fry until golden, 4-5 mins.
//         d) Stir in the garlic and cook for 1 min more.`,
//       },
//       {
//         step: `5`,
//         stepImage: `https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_680/hellofresh_s3/621cab3090bcc84771527fe4/step-db85904b.jpg`,
//         tasks: `a) Reduce the heat slightly, then add the creme fraiche and veg stock paste.
//         b) Pour in the water for the sauce (see ingredients for amount), bring to the boil and simmer for 2 mins, then remove from the heat.
//         c) Stir in the truffle zest and hard Italian style cheese.`,
//       },
//       {
//         step: `6`,
//         stepImage: `https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_680/hellofresh_s3/621cab3090bcc84771527fe4/step-8051743e.jpg`,
//         tasks: `a) Add the pasta and broccoli to the sauce and toss together.
//         b) Taste and add salt and pepper if you feel it needs it.
//         c) Serve in bowls and sprinkle over the walnuts. Enjoy!`,
//       },
//     ],
//   },
// ];
