import { Link } from "react-router-dom";
import classes from "../css/MainNavigation.module.css";
import SearchBar from "../recipes/SearchBar";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">Recipe.ly</Link>
      </div>
      <nav>
        <ul>
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
      <SearchBar />
    </header>
  );
}

export default MainNavigation;
