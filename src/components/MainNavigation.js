import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Recipe.ly</div>
      <nav>
        <ul className={classes.navItem}>
          <li>
            <Link to="/">All Recipes</Link>
          </li>
          <li>
            <Link to="/quick-recipes">Quick Recipes</Link>
          </li>
          <li>
            <Link to="/new-recipe">Add New Recipe</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
